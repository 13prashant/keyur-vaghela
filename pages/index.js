import MainBanner from "../components/Home/MainBanner";
import EnjoyMusic from "../components/Home/EnjoyMusic";
import ReadMore from "../components/Home/ReadMore";
import MusicVideos from "../components/Home/MusicVideos";
import Bandish from "../components/Home/Bandish";
import MusicPlatforms from "../components/Home/MusicPlatforms";
import InquiryBanner from "../components/Home/InquiryBanner";
import Contact from "../components/Home/Contact";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <>
            <MainBanner />
            <EnjoyMusic />
            <ReadMore />
            <MusicVideos />
            <Bandish />
            <MusicPlatforms />
            <InquiryBanner />
            <Contact />
        </>
    );
}
