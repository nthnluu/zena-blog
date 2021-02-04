interface TeamMember {
    fullName: string;
    position: string;
    linkedin: string;
    email: string;
    profilePicture: {
        formats: {
            thumbnail: {
                url: string;
            },
            large: {
                url: string;
            },
            medium: {
                url: string;
            }
        }
    };
};

export default TeamMember
