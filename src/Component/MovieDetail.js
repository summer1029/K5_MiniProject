import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import movie1 from "../assets/poster/wonka.jpg"
import movie2 from "../assets/poster/gungook.jpg"
import movie3 from "../assets/poster/qukal.jpg"
import movie4 from "../assets/poster/simin.jpg"
import movie5 from "../assets/poster/sopung.jpg"
import movie6 from "../assets/poster/dogdys.jpg"
import movie7 from "../assets/poster/deadman.jpg"
import movie8 from "../assets/poster/agail.jpg"
import movie9 from "../assets/poster/shark.jpg"
import movie10 from "../assets/poster/dmz.jpg"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MovieDetail() {
    const param = useParams().index

    let apikey = process.env.REACT_APP_APIKEY
    const [movie,setMovie] = useState();
    const [dbData, setDbData] = useState();
    const [dbReview, setDbReview] = useState();

    const posterImage = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10]

    const getMovie = async(param) => {

    let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    url = url + `key=${apikey}`
    url = url + '&targetDt=20240216'
    console.log(url)

    fetch(url)
        .then(resp => resp.json())
        .then(data => setMovie(data.boxOfficeResult.dailyBoxOfficeList[param]))
        .catch(err => console.error(err))
    }

    const getDbMovie = (id) => {
        fetch(`http://10.125.121.181:8080/movie/${id}`, {
            method: "GET"
        })
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => setDbData(data))
        .catch(err => console.error(err))
    }

    const getDbReview = (id) => {
        fetch(`http://10.125.121.181:8080/movie/review/${id}`, {
            method: "GET"
        })
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => setDbReview(data))
        .catch(err => console.error(err))
    }

    useEffect(()=> {
        getMovie(param);

        const id = parseInt(param)+1
        getDbMovie(id);
        getDbReview(id);
    }, [param])

    useEffect(()=> {
        console.log("review:",dbReview)
    }, [dbReview])

    const [rating, setRating] = useState([]) // rating을 빈 배열로 초기화 할 것
    const handleRating = ((idx, selectedRating) => {
        const newRating = [...rating] // [...rating]는 전개 연산자를 이용하여 배열 rating의 모든 요소를 새로운 배열에 복사하는 것
        newRating[idx] = selectedRating
        setRating(newRating)
    })

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const divWriter = document.getElementById("writer")
    console.log("divWriter: ",divWriter)

    const getWriterId = (string) => {
        return string.substring(0, string.indexOf("@"))
    }

  return (
    <div className='bg-black h-full w-full'>
    {movie && dbReview && (
        <div>
            <div className='p-10'>
                <img src={posterImage[param]} alt="Movie Poster" className="w-72 mb-5" />
                <div className='text-3xl font-extrabold mb-3 text-white'>{movie.movieNm}</div>
                <div className='text-lg font-medium text-white'>개봉일: {dbData.release_date}</div>
                <div className='text-lg font-medium text-white'>상영시간: {dbData.running_time}</div>
                <div className='text-lg font-medium text-white'>등급: {dbData.age_rating}</div>
                <div className='text-lg font-medium text-white'>장르: {dbData.genre}</div>
                <div className='text-lg font-medium text-white'>시놉시스: {dbData.synopsis}</div>
                <div className='text-lg font-medium text-white'>감독: {dbData.director}</div>
                <div className='text-lg font-medium text-white'>출연진: {dbData.casts}</div>   
            </div>  
            <div className='pl-10 pr-10 pb-10' style={{ width: '100%' }}>
                <div className='w-full'>
                    {dbReview.map((rv, idx) => ( 
                        <div className='flex-col justify-center items-center mb-5'>
                            <div className='flex justify-between items-center border border-solid border-gray-400 p-3'>
                                <div id="writer" className='flex-col items-center justify-center text-lg font-medium text-white w-32 pr-3 ml-3 overflow-hidden text-ellipsis border-r-2 border-gray-400'>
                                    <svg className="fill-white h-8 w-58 mr-2 pl-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                    {getWriterId(rv.writer)}
                                </div>

                                <div className='text-2xl font-bold text-center text-white w-16 ml-3 pr-5 border-r-2 border-gray-400'>
                                    ⭐{rv.grade}
                                </div>


                                <div className='text-lg font-medium text-white border-r-2 border-gray-400 w-560 ml-3 pr-3'>
                                    {rv.content}
                                </div>

                                <div className='text-lg font-medium text-center text-white w-48  ml-3 pr-3 border-r-2 border-gray-400'>
                                    <button onClick={() => handleRating(idx,1)} className='mr-2'>{rating[idx]>=1 ? '❤️':'⭕'}</button>
                                    <button onClick={() => handleRating(idx,2)} className='mr-2'>{rating[idx]>=2 ? '❤️':'⭕'}</button>
                                    <button onClick={() => handleRating(idx,3)} className='mr-2'>{rating[idx]>=3 ? '❤️':'⭕'}</button>
                                    <button onClick={() => handleRating(idx,4)} className='mr-2'>{rating[idx]>=4 ? '❤️':'⭕'}</button>
                                    <button onClick={() => handleRating(idx,5)} className='mr-2'>{rating[idx]>=5 ? '❤️':'⭕'}</button>
                                </div>

                                <div className='text-lg font-medium text-center text-white w-28 ml-3 pr-3'>
                                    {rv.date}
                                </div>

                            </div>

                            <div className='flex justify-end items-center text-white mt-1'>
                                 <React.Fragment>
                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        Open form dialog
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                        component: 'form',
                                        onSubmit: (event) => {
                                            event.preventDefault();
                                            const formData = new FormData(event.currentTarget);
                                            const formJson = Object.fromEntries(formData.entries());
                                            const email = formJson.email;
                                            console.log(email);
                                            handleClose();
                                        },
                                        }}>
                                        <DialogTitle>Modify</DialogTitle>
                                        <DialogContent>
                                            {/* <DialogContentText>
                                                To subscribe to this website, please enter your email address here. We
                                                will send updates occasionally.
                                            </DialogContentText> */}
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="name"
                                                name="email"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                                variant="standard"
                                            />
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="name"
                                                name="email"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                                variant="standard"
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button type="submit">Subscribe</Button>
                                        </DialogActions>
                                    </Dialog>
                                    </React.Fragment>                          
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

{/* <table className='border-collapse border border-gray-400 w-full'>
                    {dbReview.map((rv, idx) => ( 
                    <tr>
                        <td className='p-2 w-2/12 border border-gray-300 text-lg font-medium text-center text-white'>
                            <div className="flex items-center justify-center">
                                <svg className="fill-red-400 h-8 w-8 mr-3" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><title>Profile</title><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                {rv.writer}
                            </div>
                        </td>
                        <td className='p-2 w-1/12 border border-gray-300 text-center text-white text-2xl font-bold'>
                            ⭐{rv.grade}
                        </td>
                        <td className='p-2 w-5/12 border border-gray-300 text-lg font-medium text-white'>{rv.content}</td>
                        <td className='p-2 w-2/12 border border-gray-300 text-lg text-center'>
                            <button onClick={() => handleRating(idx,1)} className='mr-2'>{rating[idx]>=1 ? '❤️':'⭕'}</button>
                            <button onClick={() => handleRating(idx,2)} className='mr-2'>{rating[idx]>=2 ? '❤️':'⭕'}</button>
                            <button onClick={() => handleRating(idx,3)} className='mr-2'>{rating[idx]>=3 ? '❤️':'⭕'}</button>
                            <button onClick={() => handleRating(idx,4)} className='mr-2'>{rating[idx]>=4 ? '❤️':'⭕'}</button>
                            <button onClick={() => handleRating(idx,5)} className='mr-2'>{rating[idx]>=5 ? '❤️':'⭕'}</button>
                        </td>
                        <td className='p-2 w-2/12 border border-gray-300 text-lg font-medium text-center text-white'>{rv.date}</td>
                    </tr>
                     ))}
                </table> */}