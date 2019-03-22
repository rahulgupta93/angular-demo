// import { ClubMember } from './club-member.model';

export class Club {

    id: number;
    name: string;
    members: string[];

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getMembers(): string[] {
        return this.members;
    }

    setMembers(members: string[]): void {
        this.members = members;
    }

}
