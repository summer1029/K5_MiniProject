import { Link, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { stLogin } from "../Component/AtomSt";
import { useNavigate } from 'react-router-dom';

import MovieInfo from "../Component/MovieInfo";
import Login from '../Component/Login'

import bgimg from "../assets/poster/wonkaHorizon.jpg"; 
import movie0 from "../assets/poster/wonka.jpg"
import movie1 from "../assets/poster/gungook.jpg"
import movie2 from "../assets/poster/qukal.jpg"
import movie3 from "../assets/poster/simin.jpg"
import movie4 from "../assets/poster/sopung.jpg"
import movie5 from "../assets/poster/dogdys.jpg"
import movie6 from "../assets/poster/deadman.jpg"
import movie7 from "../assets/poster/agail.jpg"
import movie8 from "../assets/poster/shark.jpg"
import movie9 from "../assets/poster/dmz.jpg"

export default function MainMenu() {
    const [currnetPage, setPage] = useState("Home");
    const [isLogin, setIsLogin] = useRecoilState(stLogin);  
    // 현재 로그인 상태 콘솔에 출력 (로그인되면 true, 로그아웃되면 false)
    console.log(isLogin)

    const navigate = useNavigate()
    const navigateToRegister = () => {
      navigate("/Register")
    }

    // 페이지 변경함수
    const changePage = (page) => {
        setPage(page)
    }

    const movie = [movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9]
    const page = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    const slideRef = useRef(null);

    const scrollLeft = () => {
        if (slideRef.current) {
        const slideWidth = slideRef.current.offsetWidth / 5
        slideRef.current.scrollLeft = slideRef.current.scrollLeft - slideWidth
        }
    }

    const scrollRight = () => {
        if (slideRef.current) {
        const slideWidth = slideRef.current.offsetWidth / 5
        slideRef.current.scrollLeft = slideRef.current.scrollLeft + slideWidth
        }
    }

    const renderPage = () => {
        switch(currnetPage) {
            case "Home" :
                return (
                    <div className="flex-col w-4/5 bg-black">
                        <div className="tracking-tight ml-5 mr-5 h-1/2 border-solid border-2 border-black" style={{backgroundImage: `url(${bgimg})`, backgroundSize:"cover"}}> 
                            <div className='font-semibold text-3xl text-end mr-5 mt-40 tracking-tight text-white'> 
                                Title
                            </div> 
                            <div className='font-semibold text-lg text-end mr-5 tracking-tight text-white'> 
                                Content bla~bla~
                            </div> 
                        </div>
                        <div className='tracking-tight h-1/2'>
                            <div className='font-semibold text-lg tracking-tight text-white m-5'>
                                무비차트
                            </div>

                            <div ref={slideRef} style={{ overflowX: "auto", whiteSpace: "nowrap", marginLeft: "26px", marginRight: "26px"}}>
            
                                {movie.map((item, page) => (
                                    console.log("page:",page),
                                    <Link to={`/movie/${page}`} style={{
                                                            display: "inline-block",
                                                            width: "180px", // 여기에 슬라이드의 너비를 조정
                                                            height: "248px",
                                                            // minWidth: "200px", // 최소 너비 지정 (원하는 값으로 변경 가능)
                                                            background: `url(${item})`,
                                                            backgroundSize: "cover", // 이미지가 요소에 맞게 확대/축소되도록 설정
                                                            marginRight: "10px",
                                                            flexDirection: "column",
                                                            justifyItems : "center"
                                                            }}
                                        className="mb-5">
                                        
                                        {/* <div>{`movie${index}`}</div> */}    
                                        {/* <div className="text-white text-base"> {item.title} </div>  */}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <button onClick={scrollLeft} className="font-semibold text-lg tracking-tight text-white mt-2 mr-1 hover:text-red-400">◀️</button>
                                <button onClick={scrollRight} className="font-semibold text-lg tracking-tight text-white mt-2 ml-1 hover:text-red-400">▶️</button>
                            </div>
                        </div>
                        {/* <div className='font-semibold text-lg tracking-tight ml-5 text-white h-1/5'>Social</div> */}
                    </div>
                )
            case "Movie" :
                return (
                    <MovieInfo />
                )
            case "Room" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">상영관 page</h1>
                    </div>
                )
            case "Theater" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">영화관 page</h1>
                    </div>
                )
            case "Book" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">예매 page</h1>
                    </div>
            )
            case "Review" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">리뷰 page</h1>
                    </div>
            )
            case "Board" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">게시판 page</h1>
                    </div>
            )
            case "Help" :
                return (
                    <div className='flex-col bg-black w-4/5'>
                        <h1 className="text-white">고객센터 page</h1>
                    </div>
            )
        }
    }

    return (
        <div>
        <nav className="flex flex-wrap justify-betweenween items-center bg-black">
            <button type="button" onClick={() => changePage("Home")} className='flex items-center text-red-400 w-1/5 m-5'>
                <div className='font-extrabold font-appleB text-4xl tracking-tight'>
                    StellaNeX
                </div>
            </button>
            
            <div className='block flex-grow lg:flex lg:items-center lg:w-auto justify-end w-4/5 m-5'>
                <div className='mr-3'>
                    <svg className="fill-white h-7 w-7" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" mr-3><title>Profile</title><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                </div>

                {/* <Link to='/Login' className='block lg:inline-block p-1.5 mr-3 border rounded text-lg text-white border-white hover:text-red-400 hover:bg-white' >
                    {isLogin ? "Logout"
                             : "Login"}
                             Login
                </Link> */}
                <Login />
                <button onClick={navigateToRegister} className='block lg:inline-block p-1.5 mr-3 border rounded text-lg font-appleB text-white border-white hover:text-red-400 hover:bg-white'>
                    Register
                </button>
                {/* <Link to='/Register' className='block lg:inline-block p-1.5 mr-3 border rounded text-lg text-white border-white hover:text-red-400 hover:bg-white' >
                    Register
                </Link> */}
            </div>
        </nav>

        <div className='flex h-full'>
            <div className='flex-col bg-zinc-800 w-1/5 p-5'>
                <div className='flex mt-5 ml-5 mb-10'>
                    <input className="input" type='search' style={{width:'80%'}} />
                    <button className='type="button" p-1 ml-1 border text-base font-appleB text-white border-white hover:bg-white hover:text-black' >
                        검색
                    </button>
                </div>
                <button type="button" onClick={() => changePage("Movie")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>영화<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Room")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M74.6 373.2c41.7 36.1 108 82.5 166.1 73.7c6.1-.9 12.1-2.5 18-4.5c-9.2-12.3-17.3-24.4-24.2-35.4c-21.9-35-28.8-75.2-25.9-113.6c-20.6 4.1-39.2 13-54.7 25.4c-6.5 5.2-16.3 1.3-14.8-7c6.4-33.5 33-60.9 68.2-66.3c2.6-.4 5.3-.7 7.9-.8l19.4-131.3c2-13.8 8-32.7 25-45.9C278.2 53.2 310.5 37 363.2 32.2c-.8-.7-1.6-1.4-2.4-2.1C340.6 14.5 288.4-11.5 175.7 5.6S20.5 63 5.7 83.9C0 91.9-.8 102 .6 111.8L24.8 276.1c5.5 37.3 21.5 72.6 49.8 97.2zm87.7-219.6c4.4-3.1 10.8-2 11.8 3.3c.1 .5 .2 1.1 .3 1.6c3.2 21.8-11.6 42-33.1 45.3s-41.5-11.8-44.7-33.5c-.1-.5-.1-1.1-.2-1.6c-.6-5.4 5.2-8.4 10.3-6.7c9 3 18.8 3.9 28.7 2.4s19.1-5.3 26.8-10.8zM261.6 390c29.4 46.9 79.5 110.9 137.6 119.7s124.5-37.5 166.1-73.7c28.3-24.5 44.3-59.8 49.8-97.2l24.2-164.3c1.4-9.8 .6-19.9-5.1-27.9c-14.8-20.9-57.3-61.2-170-78.3S299.4 77.2 279.2 92.8c-7.8 6-11.5 15.4-12.9 25.2L242.1 282.3c-5.5 37.3-.4 75.8 19.6 107.7zM404.5 235.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6c-1 5.3-7.4 6.4-11.8 3.3zm136.2 15.5c-1 5.3-7.4 6.4-11.8 3.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6zM530 350.2c-19.6 44.7-66.8 72.5-116.8 64.9s-87.1-48.2-93-96.7c-1-8.3 8.9-12.1 15.2-6.7c23.9 20.8 53.6 35.3 87 40.3s66.1 .1 94.9-12.8c7.6-3.4 16 3.2 12.6 10.9z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>상영관<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Theater")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>영화관<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Book")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>예매<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Review")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>리뷰<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>게시판<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Help")} className='flex m-5 pt-56'>
                    <svg className ='fill-white h-7 w-7 hover:fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>고객센터<br/></div>
                </button>

            </div>
            {/* <div className='flex-col bg-black w-4/5'> */}
                {renderPage()}
            {/* </div> */}
        </div>

        <footer className='flex p-5 h-36 bg-black'>
            <div>
                <ul className='font-medium text-lg tracking-tight text-zinc-400 mb-5'>StellaNeX<br/></ul>
                
                <ul className='font-normal text-sm tracking-tight text-zinc-400'>전화번호 : 000-0000-0000<br/></ul>
                <ul className='font-normal text-sm tracking-tight text-zinc-400'>위치 : 부산시 금정구 부산대<br/></ul>
                <ul className='font-normal text-sm tracking-tight text-zinc-400'>관리자 : 이지원, 허선행<br/></ul>
            </div>
        </footer>
        </div>
    )
}
