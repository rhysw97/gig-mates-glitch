interface UserData {
    id: string
    email: string
    username: string
    dateOfBirth: string
    password: string //Contains at least one uppercase, lowercase, number and special char
    //(must also be more than 8 letters)
    profileData: {
        Name: string
        age: number
        profilePiture: File //using GridFS
        bio: string
        genres: Array<string> //list of genres the person is interested in
        interestedGigs: Array<GigData> //list of gigs the user has registered there interest with
        postHistory: Array<PostData>
        friendslist: Array<FriendData>
        favouriteArtists: Array<string>
    }
}

interface FriendData {
    name: string
    picture: File
    profileLink: string //URL
}

interface GigData {
    artist: String
    genre: String
    location: GigLocationData
    date: string
    time: string
    eventPicture: File
}

interface GigLocationData {
    streetAddress:string
    city: string
    country: string
    postcode: string
}

interface PostData {
    username: string
    likedBy: Array<FriendData>
    comments: CommentData
    timePosted: string
    attachedFiles: File
}

interface CommentData {
    userName: string
    username: string
    likedBy: Array<FriendData>
    timePosted: string
}

export {
    UserData,
    FriendData,
    GigData,
    GigLocationData,
    PostData,
    CommentData

}