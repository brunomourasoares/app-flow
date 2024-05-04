import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");
const charCodification = "utf-8";

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, charCodification);
    let jsonFile = JSON.parse(rawData);
    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }
    return jsonFile;
}