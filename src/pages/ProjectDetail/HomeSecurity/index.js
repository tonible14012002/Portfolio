import { Fragment, useLayoutEffect } from "react"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Para from "../../../components/Para"
import Color from "../../../components/Color"
import Image from "../../../components/Image"
import Board from "../../../components/Board"
import Section from "../../../components/Section"
import Divider from "../../../components/Divider"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import URL from "../../../components/URL"

const HomeSecurity = () => {
    const sqlCode = `
    cursor.execute (
                """
                SELECT id , first_name , last_name FROM accounts_myuser
                WHERE 
                sqrt ( power ( CUBE ( array [{}]) <-> vec_low , 2)
                    + power ( CUBE ( array [{}]) <-> vec_high , 2)) <= {}
                """ 
                . format (
                    ’,’. join (str( s ) for s in encodings [0:64]) ,
                    ’,’. join (str( s ) for s in encodings [64:128]) ,
                    threshold
                ) +
                """ ORDER BY
                sqrt ( power ( CUBE ( array [{}]) <-> vec_low , 2)
                    + power ( CUBE ( array [{}]) <-> vec_high , 2))
                ASC LIMIT
                """ . format (
                    ’,’. join (str( s ) for s in encodings [0:64]) ,
                    ’,’. join (str( s ) for s in encodings [64:128]) ,
        )
    )
    `

    useLayoutEffect(() => {
        document.title = "Home Security"
    }, [])
    
    return (
        <>
            <Header pageName="Home Security" />
            <Banner src="/home_security/home-security-banner.png"/>
            <div data-aos="fade-up">
                <Para className="f">
                    &emsp;&emsp;   
                    Worked in a Team of <b>4 member</b> to design, construct a web-based
                    <Color primary> realtime Security system</Color> for a building.
                    The system including a CCTV camera that responsible for capturing, <Color primary>streaming</Color> video to the adminstrator 
                    as well as handling <Color bg>face recognition</Color> for the building's members as a gatekeeper.
                </Para>
                <Para className="mt-2">
                    &emsp;&emsp;
                    <Color primary>Optimized</Color> capturing images resulted in higher framerate by implementing multitheading programming. 
                </Para>
                <Para className="mt-2 mb-10">
                    &emsp;&emsp;
                    <Color primary>Faster face recognition</Color> response time by implementing face recognition compution in the database layer with <Color className="font-medium" bg primary>Postgres extension - CUBE</Color>.
                </Para>
            </div>
            <Image data-aos="fade-up"
                src="/home_security/system_architecture.png"
                title="Architecture"
                className="w-full tablet:w-1/2 p-[50%] tablet:p-[25%] "
            />

            <div data-aos="fade-up">
                <Section className="mt-8">System Requirements</Section>
                <Divider/>
                <Para className="mt-4">
                    &emsp;&emsp;
                    <Color primary>1. </Color>
                    User accounts are divided into two Groups: <Color bg primary>Admin</Color> and <Color bg primary>Ordinary</Color> User.
                    The building's members will first register their account as well as <Color>upload their face image</Color>.
                </Para>
                <Para className="mt-1">
                    &emsp;&emsp;
                    <Color primary>2. </Color>
                    The admin can <Color>view</Color> all the register request and check for people's information and decide to <Color>accept or not</Color>.
                </Para>
                <Para className="mt-1">
                    &emsp;&emsp;
                    <Color primary>3. </Color>
                    After accepted by the admin, the building <Color>member</Color> now can <Color>recognized</Color> by the CCTV Camera and have right to go through the gate.
                </Para>
                <Para className="mt-1">
                    &emsp;&emsp;
                    <Color primary>4. </Color>
                    In the admin side, they can <Color>view Streaming video</Color> from the CCTV and be <Color>notified</Color> whenever face is recognised. 
                    They can also decide whether to delete registed ordinary account.
                </Para>
                <Para className="mt-1">
                    &emsp;&emsp;
                    <Color primary>5. </Color>
                    Ordinaty User after register can now <Color>chat</Color> with the Admin user in realtime.
                </Para>
            </div>

            <div data-aos="fade-up">
                <Section className="mt-8">
                    Face Recognition implementation
                </Section>
                <Divider/>
                <Para>
                    &emsp;&emsp;
                    We used Raspberry Pi 4 Model B for the implementation of CCTV Camera as it is small single computer 
                    perfectly suitable for video processing in realtime.
                </Para>
                <Image
                    src="/home_security/raspberry.png"
                    title="Raspberry Pi 4 model B"
                    className="w-full p-[25%]"
                />
                <Section className="text-sm tablet:text-lg">
                    <Color>
                        1. Database Schema
                    </Color>
                </Section>
                <Para>
                    &emsp;&emsp;
                    Face encoding is a 128 dimensions vector. The <Color primary bg>CUBE</Color> datatype from <Color primary>Postgres</Color> extensions  is perfectly suitable for storing this data.
                    It also provide an Operator <Color bg>{"<->"}</Color> for Calculation Euclidean Distance between two vector. However it allow only vector with maximum 64 dimensions 
                    so we split the encoding into two smaller vector called <Color>vec_low</Color> and <Color>vec_high</Color>.
                </Para>
                <Image
                    src="/home_security/database.png"
                    title="Example user row"
                    className="w-[100%] p-[5%]"
                />
            </div>
            <div data-aos="fade-up">
                <Section className="text-sm tablet:text-lg">
                    <Color>
                        2. Face comparision
                    </Color>
                </Section>
                <Para>
                    &emsp;&emsp;
                    Here is the SQL code for face comparision.
                </Para>
                <Board className="p-0 mt-4">
                <SyntaxHighlighter
                    language="python"
                    style={vs2015}
                    customStyle={{background: "transparent"}}
                    className="text-xs tablet:text-sm"
                >
                        {sqlCode}
                    </SyntaxHighlighter>
                </Board>
                <Divider className="mt-10"/>
                <Para>
                    &emsp;&emsp;
                    Main page for admin to see who entering the building.
                </Para>
                <Image
                    src="/home_security/UI1.png"
                    title="Face recognition"
                    className="w-full p-[25%]"
                />
                <Para>
                    &emsp;&emsp;
                    User registration confirm page
                </Para>
                <Image
                    src="/home_security/UI2.png"
                    title="User's Register requests"
                    className="w-full p-[25%]"
                />
                <Para>
                    &emsp;&emsp;
                    User detail page including personal information and activities.
                </Para>
                <Image
                    src="/home_security/UI3.png"
                    title="User detail page"
                    className="w-full p-[25%]"
                />
            </div>
            <Section className="mt-10">
                Frameworks and Libraries used
            </Section>
            <Divider/>
            <Board>
                <table className="grid grid-cols-[100px_1fr] gap-y-2">
                    <Color bg primary>Frontend</Color>
                    <Para>
                        <Color primary>ReactJs</Color>,
                        <Color primary> Tailwind</Color>,
                        React router Dom,
                        Axios, Toastify, ...
                    </Para>
                    <Color bg>Backend</Color>
                    <Para>
                        <Color primary>Django - python</Color>,
                        <Color primary> Postgresql</Color>,
                        OpenCV, 
                        Django Rest Framework, simpleJwt,
                    </Para>
                    <Color className="text-white">Others</Color>
                    <Para>
                        <Color primary>Firebase</Color>
                    </Para>
                </table>
            </Board>
            <Section className="mt-6">
                Sources
            </Section>
            <Board className="grid grid-cols-[110px_1fr] gap-y-1 gap-x-2 text-sm tablet:text-base">
                <Color primary bg>Frontend</Color>
                <URL>https://github.com/tonible14012002/Home-Security-System-frontend</URL>
                <Color bg>Backend</Color>
                <URL>https://github.com/tonible14012002/Home-Security-Backend</URL>
                <Color bg>Raspberry</Color>
                <URL>https://github.com/tonible14012002/home-security-webcam-raspberry</URL>
            </Board>
        </>
    )
}

export default HomeSecurity