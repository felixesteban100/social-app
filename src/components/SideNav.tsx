import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import IconHoverEffect from "./IconHoverEffect"
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc"

type SideNavProps = {
    toogleTheme: () => void
}

function SideNav({ toogleTheme }: SideNavProps) {
    const session = useSession()
    const user = session.data?.user
    return (
        <nav className="sticky top-0 px-2 py-4 bg-base-100">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
                <li>
                    <IconHoverEffect>
                        <label className="swap swap-flip">
                            <input type="checkbox" onClick={() => toogleTheme()} />
                            <span className="swap-on flex items-center gap-4">
                                <svg className=" fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                <span className="hidden text-lg md:inline">Light mode</span>
                            </span>

                            <span className="swap-off flex items-center gap-4">
                                <svg className=" fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                <span className="hidden text-lg md:inline">Dark mode</span>
                            </span>
                        </label>
                    </IconHoverEffect>
                </li>

                <li>
                    <Link href={"/"}>
                        <IconHoverEffect>
                            <span className="flex items-center gap-4">
                                <VscHome className="h-8 w-8" />
                                <span className="hidden text-lg md:inline">Home</span>
                            </span>
                        </IconHoverEffect>
                    </Link>
                </li>

                {user != null && (
                    <li>
                        <Link href={`/profiles/${user.id}`}>
                            <IconHoverEffect>
                                <span className="flex items-center gap-4">
                                    <VscAccount className="h-8 w-8" />
                                    <span className="hidden text-lg md:inline">Profile</span>
                                </span>
                            </IconHoverEffect>
                        </Link>
                    </li>
                )}

                {user == null ? (
                    <li>
                        <button onClick={() => void signIn()}>
                            <IconHoverEffect>
                                <span className="flex items-center gap-4">
                                    <VscSignIn className="h-8 w-8 fill-success " />
                                    <span className="hidden text-lg text-success md:inline">Log In</span>
                                </span>
                            </IconHoverEffect>
                        </button>
                    </li>
                ) : (

                    <li>
                        <button onClick={() => void signOut()}>
                            <IconHoverEffect>
                                <span className="flex items-center gap-4">
                                    <VscSignOut className="h-8 w-8 fill-error " />
                                    <span className="hidden text-lg text-error md:inline">Log Out</span>
                                </span>
                            </IconHoverEffect>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default SideNav