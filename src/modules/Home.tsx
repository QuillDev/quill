import { Link } from "solid-app-router";
import {GithubIcon} from "./icons/GithubIcon";
import {InstagramIcon} from "./icons/InstagramIcon";
import {TwitterIcon} from "./icons/TwitterIcon";

export const Home = () => {
    return (
        <>
            <div className={"h-screen bg-slate-900 grid place-items-center grid-cols-1 grid-flow-row-dense"}>
                <div className={"text-7xl text-white"}>
                    {/*Icon Text*/}
                    <div className={"pb-2"}>
                        {"<QuillDev/>"}
                    </div>

                    {/*Social Icons*/}
                    <div className={"grid grid-flow-col-dense"}>
                        <Link href={"https://www.github.com/quilldev"}><GithubIcon/></Link>
                        <Link href={"https://www.instagram.com/quilldev"}><InstagramIcon/></Link>
                        <Link href={"https://www.twitter.com/quilldev"}><TwitterIcon/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}