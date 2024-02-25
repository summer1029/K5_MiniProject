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
                    <div className="flex-col w-4/5 bg-black h-svh">
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
                <button type="button" onClick={() => changePage("Movie")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>웡카<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Room")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>건국전쟁<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Theater")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>귀멸의 칼날<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Book")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>시민덕희<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Review")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>소풍<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>도그데이즈<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>데드맨<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>아가일<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>아기상어 극장판<br/></div>
                </button>
                <button type="button" onClick={() => changePage("Board")} className='flex m-5'>
                    <div className='font-semibold text-lg tracking-tight ml-3 text-white hover:text-red-400'>DMZ 동물특공대<br/></div>
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
