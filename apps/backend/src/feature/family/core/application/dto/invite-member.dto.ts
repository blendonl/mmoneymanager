export class InviteMemberDto {
  familyId: string;
  inviteeEmail: string;

  constructor(familyId: string, inviteeEmail: string) {
    this.familyId = familyId;
    this.inviteeEmail = inviteeEmail;
  }
}
