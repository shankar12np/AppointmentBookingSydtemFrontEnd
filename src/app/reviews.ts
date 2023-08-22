export class Reviews {
  id?: number;
  text?: string;
  name?: string;
  email?: string;
  dateAndTime?:string;
  likeCount?: string;
  dislikeCount?: string;

  constructor() {
  }
  populateFromForm(formValue: any) {
    this.id = formValue.id;
    this.text = formValue.text;
    this.name = formValue.name;
    this.email = formValue.email;
    this.dateAndTime = formValue.dateAndTime;
    this.likeCount = formValue.likeCount;
    this.dislikeCount = formValue.dislikeCount;
  }



}
//
// Long id;
// String text;
// String name;
// String email;
// String dateAndTime;
// Long likeCount;
// Long dislikeCount;
//
