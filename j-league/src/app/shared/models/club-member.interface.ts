export interface ClubMember {
    id?: number;
    name: string;
    type: 'manager' | 'player' | 'owner';
}
