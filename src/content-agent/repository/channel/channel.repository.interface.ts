
import {LinkInterface} from "../../../model/link/link.interface";
import {ChannelModel} from "../../model/channel/channel.model";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";

export interface ChannelRepositoryInterface {
    findOneByChannelLink(channelLink : LinkInterface) : TelegramChannelModel
}