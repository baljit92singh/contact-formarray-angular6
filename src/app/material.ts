import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatAutocompleteModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatChipsModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  NativeDateAdapter,
  MatNativeDateModule,
  MatCheckboxModule,
  MatStepperModule,
  MatExpansionModule,
  MatDividerModule,
  MatDatepicker
} from "@angular/material";
/* import { CustomDateAdapter } from './custom-date-adapter'; */
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

@NgModule({
  imports: [MatDatepickerModule, MatNativeDateModule],
  declarations: [],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  ]
})
export class MaterialModule {}
