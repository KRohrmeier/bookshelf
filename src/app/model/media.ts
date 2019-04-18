export class Media {
    favorite: boolean = false;

    constructor(
        public title: string,
        public genre: string,
        public mediaType: string,
        public currentVote: number,
        public fullVote: number
    ) {}

    isPositiveReview(): boolean {
        return (this.currentVote/this.fullVote) >= 0.6;
    }
}
