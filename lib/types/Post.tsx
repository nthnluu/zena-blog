interface Post {
    id: string;
    title: string;
    summary: string;
    category: {
        id: string;
        title: string;
    };
    content: string;
    published_at: Date;
    cover: {
        formats: {
            large?: {
                url: string;
            },
            medium?: {
                url: string;
            }
        }
    }
    author: {
        fullName: string;
        profilePicture: {
            formats: {
                thumbnail: {
                    url: string;
                }
            }
        };
    };
}

export default Post
