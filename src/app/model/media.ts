export class Media {
    favorite: boolean = false;

    constructor(
        public title: string,
        public genre: string,
        public mediaType: string,
        public imagePath: string,
        public currentVote: number,
        public fullVote: number,
        public isFavorite: boolean
    ) {}

    isPositiveReview(): boolean {
        return (this.currentVote/this.fullVote) >= 0.6;
    }
}
