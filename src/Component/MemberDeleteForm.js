import React from "react";
import { useState } from "react";

const MemberDeletePage = () => {

    const [email, setEmail] = useState("");
    const [confirmedEmail, setConfirmedEmail] = useState("");

    // 회원 계정을 삭제하는 함수
    const handleDelete = async () => {
        if (email !== confirmedEmail) {
            return alert('Confirmed email is wrong')
        }

        fetch("http://10.125.121.181:8080/member/delete", {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("loginToken") 
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error");
                  }
                alert("정상적으로 탈퇴되었습니다")
                window.location.href = "http://192.168.0.26:3000/" // 이거는 컴퓨터 ip주소로
                }
            )
            .catch((err) => console.error(err));
    };

    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg">
                <div className="text-2xl font-extrabold text-center text-red-400 mb-5">회원 계정 삭제</div>
                <div className="text-1xl font-bold text-center text-red-400 mb-5">정말로 계정을 삭제하시겠습니까? <br/> 이메일 확인을 진행해주세요</div>
                <form className="space-y-2 md:space-y-3">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Email</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                    </div>
                    <div>
                        <label htmlFor="confirm-email" className="block mb-2 text-base font-medium text-gray-900">Confirm email</label>
                        <input type="text" name="confirm-email" id="confirm-email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                    </div>
                    <button onClick={handleDelete}
                        className="w-full text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-base px-5 py-2.5 text-center">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default MemberDeletePage;