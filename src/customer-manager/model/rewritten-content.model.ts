export interface ChannelWithPostsModel {
    channelLink : string
    posts? : string[]
    status? : string,
    errorMessage?: string,
}
export interface RewrittenContentModel {
    channelsWithPosts : ChannelWithPostsModel[]
}