import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { IProjectLand, ProjectLand } from '../project-land.model';
import { ProjectLandService } from '../service/project-land.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { ILand } from 'app/entities/land/land.model';
import { LandService } from 'app/entities/land/service/land.service';
import { IProject } from 'app/entities/project/project.model';
import { ProjectService } from 'app/entities/project/service/project.service';
import { HissaType } from 'app/entities/enumerations/hissa-type.model';

@Component({
  selector: 'jhi-project-land-update',
  templateUrl: './project-land-update.component.html',
})
export class ProjectLandUpdateComponent implements OnInit {
  isSaving = false;
  hissaTypeValues = Object.keys(HissaType);

  landsCollection: ILand[] = [];
  projectsSharedCollection: IProject[] = [];

  editForm = this.fb.group({
    id: [],
    remarks: [],
    documents: [],
    documentsContentType: [],
    hissaType: [],
    land: [null, Validators.required],
    project: [null, Validators.required],
  });

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    protected projectLandService: ProjectLandService,
    protected landService: LandService,
    protected projectService: ProjectService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ projectLand }) => {
      this.updateForm(projectLand);

      this.loadRelationshipsOptions();
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('jhipsterApp.error', { ...err, key: 'error.file.' + err.key })),
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const projectLand = this.createFromForm();
    if (projectLand.id !== undefined) {
      this.subscribeToSaveResponse(this.projectLandService.update(projectLand));
    } else {
      this.subscribeToSaveResponse(this.projectLandService.create(projectLand));
    }
  }

  trackLandById(_index: number, item: ILand): number {
    return item.id!;
  }

  trackProjectById(_index: number, item: IProject): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProjectLand>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(projectLand: IProjectLand): void {
    this.editForm.patchValue({
      id: projectLand.id,
      remarks: projectLand.remarks,
      documents: projectLand.documents,
      documentsContentType: projectLand.documentsContentType,
      hissaType: projectLand.hissaType,
      land: projectLand.land,
      project: projectLand.project,
    });

    this.landsCollection = this.landService.addLandToCollectionIfMissing(this.landsCollection, projectLand.land);
    this.projectsSharedCollection = this.projectService.addProjectToCollectionIfMissing(this.projectsSharedCollection, projectLand.project);
  }

  protected loadRelationshipsOptions(): void {
    this.landService
      .query({ filter: 'projectland-is-null' })
      .pipe(map((res: HttpResponse<ILand[]>) => res.body ?? []))
      .pipe(map((lands: ILand[]) => this.landService.addLandToCollectionIfMissing(lands, this.editForm.get('land')!.value)))
      .subscribe((lands: ILand[]) => (this.landsCollection = lands));

    this.projectService
      .query()
      .pipe(map((res: HttpResponse<IProject[]>) => res.body ?? []))
      .pipe(
        map((projects: IProject[]) => this.projectService.addProjectToCollectionIfMissing(projects, this.editForm.get('project')!.value))
      )
      .subscribe((projects: IProject[]) => (this.projectsSharedCollection = projects));
  }

  protected createFromForm(): IProjectLand {
    return {
      ...new ProjectLand(),
      id: this.editForm.get(['id'])!.value,
      remarks: this.editForm.get(['remarks'])!.value,
      documentsContentType: this.editForm.get(['documentsContentType'])!.value,
      documents: this.editForm.get(['documents'])!.value,
      hissaType: this.editForm.get(['hissaType'])!.value,
      land: this.editForm.get(['land'])!.value,
      project: this.editForm.get(['project'])!.value,
    };
  }
}