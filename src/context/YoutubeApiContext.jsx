import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const fakeClient = new FakeYoutubeClient();
const youtube = new Youtube(client);


export default function YoutubeApiProvider({children}) {
    return (
        <YoutubeApiContext.Provider value={{youtube}}>
            {children}
        </YoutubeApiContext.Provider>
    );
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext);
}