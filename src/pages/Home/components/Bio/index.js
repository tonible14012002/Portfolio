import Board from "../../../../components/Board"
import Color from "../../../../components/Color"
import Para from "../../../../components/Para"
import Button from "../../../../components/Button"
import URL from "../../../../components/URL"
import SkillBadge from "../../../../components/Badge"

const Bio = () => {
    return (
        <div className=" rounded-lg p-2">
            <div data-aos="fade-up">
                <div className="mb-3">
                    <h3 className="tablet:text-2xl text-lg font-medium">
                        <Color primary>1. </Color> 
                        <span>About me</span>
                    </h3>
                </div>
                <Board className="font-medium">
                    <h4 className="text-base">My name is <Color primary>Bui Ngoc Nam Anh. </Color></h4>
                    <h4 className="text-xs text-zinc-400 dark:text-zinc-700">( Looking for Intern Software Engineer position )</h4>
                    <Para blur className="mt-3 text-sm tablet:text-base font-normal">
                        I am currently studying Computer Engineering bachelor at Ho Chi Minh University of Technology - one of the top tier universities based in Ho Chi Minh city, Viet Nam.
                        I enjoy spending hours in cozy coffee shops for coding as well as studying new things. Especially, i have a strong passionate in problem solving and system design pattern.
                    </Para>
                </Board>           
            </div>
            <div data-aos="fade-up" className="mt-6">
                <div className="mb-3">
                    <h3 className="tablet:text-2xl text-lg font-medium">
                        <Color primary>1. </Color> 
                        <span>Skills</span>
                    </h3>
                </div>
                <div className="rounded-xl text-sm tablet:text-base text-zinc-200 pt-4 tablet:p-4 flex flex-col gap-4">
                    <Board>
                    <div className="grid tablet:grid-cols-[140px_1fr] grid-cols-[140px_1fr] tablet:gap-5 gap-2">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">English Proficency</span>
                        <Para>
                            <Color className="font-medium">IELTS 6.5 Overall.</Color>
                        </Para>
                    </div>
                    </Board>
                    <div className="grid grid-cols-[160px_1fr] tablet:grid-cols-[160px_1fr] gap-2 tablet:gap-5">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Proficiency languages</span>
                        <ul className="font-normal flex flex-wrap gap-1">
                            <SkillBadge name="Python"/>
                            <SkillBadge name="Javascript"/>
                        </ul>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] tablet:grid-cols-[160px_1fr] gap-2 tablet:gap-5">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Other languages</span>
                        <Para className=" font-bold flex flex-wrap gap-1">
                            <SkillBadge name="Dart"/>
                            <SkillBadge name="HTML"/>
                            <SkillBadge name="CSS"/>
                        </Para>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] tablet:grid-cols-[100px_1fr] gap-2 tablet:gap-5">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Development</span>
                        <Para className="flex flex-wrap gap-1 w-fit">
                            <SkillBadge
                                name="Django"
                            />
                            <SkillBadge
                                name="ReactJs"
                            />
                            <SkillBadge
                                name="ReactNative"
                            />
                            <SkillBadge
                                name="Flask"
                            />
                            <SkillBadge
                                name="Flutter"
                            />
                            <SkillBadge
                                name="Postgres"
                            />
                            <SkillBadge
                                name="MySql"
                            />
                        </Para>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] tablet:grid-cols-[100px_1fr] gap-2 tablet:gap-5 mt-2 ">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Others</span>
                        <Para className=" font-medium flex flex-wrap gap-1">
                            Firebase, Git, Github, Bash, Experience with Linux
                        </Para>
                    </div>
                </div>          
            </div>
            <div data-aos="fade-up" className=" mt-6">
                <div className="mb-1 font-medium">
                    <h3 className="tablet:text-2xl text-lg">
                        <Color primary>2.</Color> <span>Coursework</span>
                    </h3>
                </div>
                <div className="rounded-xl text-sm tablet:text-base text-zinc-200 pt-4 tablet:p-4">
                    <div className="grid tablet:grid-cols-[150px_1fr] grid-cols-[70px_1fr]">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Formal</span>
                            <ul className="list-disc">
                                <li>
                                    <Color >Datastructure and Algorithms</Color>
                                </li>
                                <li>
                                    <Color >Computer Networking</Color>
                                </li>
                                <li>
                                    <Color >Operating System</Color>
                                </li>
                                <li>
                                    <Color >Cryptography and Network Security</Color>
                                </li>
                                <li>
                                    <Color >...</Color>
                                </li>
                            </ul>
                            {/* <Color > Computer Networking</Color>,
                            <Color > Operating System</Color>,
                            <Color > Cryptography and Network security</Color>, ... */}
                    </div>
                    <div className="grid tablet:grid-cols-[150px_1fr] grid-cols-[70px_1fr]">
                        <span className="block font-medium text-zinc-300 dark:text-zinc-500">Informal</span>
                        <ul className="list-disc">
                            <li>
                                <Color primary>ReactJs fullcourse - Evondev</Color>, 
                            </li>
                            <li>
                                <Color primary>F8 Fullstack.edu.vn - Elearning platform</Color>, 
                            </li>
                            <li>
                                <Color primary>Mastering Datastructure and Algorithms - Abdul bari - Udemy</Color>, 
                            </li>
                            <li><Color primary>Django - traversy Media</Color></li>
                            <li>...</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div data-aos="fade-up" className="mt-6">
                <div className="mb-1 font-medium">
                    <h3 className="tablet:text-2xl text-lg">
                        <Color primary>3.</Color> <span>Contact</span>
                    </h3>
                </div>
                <div  className="p-4 m-auto tablet:text-base text-sm">
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color bg className="p-0 pl-2 pr-2">Gmail</Color>
                        <span className="font-light break-all">
                            <URL>
                            namanh14.work@gmail.com
                            </URL>
                        </span>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color primary bg className="p-0 pl-2 pr-2">Facebook</Color>
                        <Button className="text-rose-400 dark:text-pink-500 font-light break-all"
                            href="https://www.facebook.com/namanh.bui.549/">
                            <URL>
                                https://www.facebook.com/namanh.bui.549/
                            </URL>
                        </Button>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color primary bg className="p-0 pl-2 pr-2">Instagram</Color>
                        <Button className="font-light break-all"
                            href="https://www.instagram.com/14maroon/">
                            <URL>
                            https://www.instagram.com/14maroon/
                            </URL>
                        </Button>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color primary bg className="p-0 pl-2 pr-2">Phone</Color>
                        <Button className="font-light break-all">
                            <URL>
                                0796518081
                            </URL>
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bio