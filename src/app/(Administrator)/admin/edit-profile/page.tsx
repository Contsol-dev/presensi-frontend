"use client";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useState } from "react";

export default function Administrator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("/avatar1.jpg");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const simulateImageUpload = (imageFile: any) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Ganti URL ini dengan URL sebenarnya yang didapatkan dari server setelah diunggah
        const imageUrl = URL.createObjectURL(imageFile);
        resolve(imageUrl);
      }, 1000);
    });
  };

  const handleUpload = () => {
    console.log("Selected Image:", selectedImage);

    simulateImageUpload(selectedImage).then((imageUrl) => {
      setAvatarUrl(imageUrl);
    });
  };

  const [about, setAbout] = useState(
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta laboriosam voluptas vero minima hic suscipit amet itaque officia quasi"
  );
  const [name, setName] = useState("Mugiwara No Rambe");
  const [email, setEmail] = useState("mugiwara@gmail.com");
  const handleSave = () => {
    const elementAbout = document.getElementById(
      "about-update"
    ) as HTMLTextAreaElement;
    const elementName = document.getElementById(
      "name-update"
    ) as HTMLTextAreaElement;
    const elementEmail = document.getElementById(
      "email-update"
    ) as HTMLTextAreaElement;
    const textaboutValue = elementAbout ? elementAbout.value : "";
    const textnameValue = elementName ? elementName.value : "";
    const textemailValue = elementEmail ? elementEmail.value : "";
    setAbout(textaboutValue);
    setName(textnameValue);
    setEmail(textemailValue);
  };

  return (
    <div className="flex bg-[#EEEEEE] lg:h-full">
      <span className="relative  top-0">
        {" "}
        <NavbarAdminDashboard />
      </span>
      <div className="lg:flex lg:justify-between gap-2 lg:p-14 w-full lg:overflow-hidden mb-4">
        <div className="lg:w-[500px] h-screen bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-12">
              {" "}
              <img
                src={avatarUrl}
                alt="avatar"
                width={175}
                height={175}
                className=" rounded-full w-20 h-20"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-8 gap-4">
              <h2 className="font-bold lg:text-xs">{name}</h2>
              <p className="lg:text-xs">{email}</p>
            </div>
            <div className="flex flex-col justify-center px-4 lg:text-xs items-center mt-20 gap-4 text-center">
              <h2 className="font-bold" id="about-heading">
                About
              </h2>
              <p>{about}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-screen h-screen bg-white rounded-xl shadow-lg">
          <div className="lg:m-16 mt-8 p-4 lg:p-0">
            <div>
              <div className="lg:flex lg:flex-row lg:items-center lg:gap-4">
                <div>
                  {" "}
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    width={110}
                    height={110}
                    className="rounded-full w-12 h-12 mb-2"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="lg:text-[15px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mb-2"
                    />
                  </div>
                  <div className="flex flex-row gap-4 lg:text-[15px]">
                    <div>
                      <button
                        className="border-4 py-1 px-2 rounded-lg"
                        onClick={handleUpload}
                      >
                        Change Photo
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="border-4 py-1 px-2 rounded-lg text-red-700">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-col gap-4 mt-8">
                <div className="font-bold lg:text-xs">
                  <h3>Personal Details</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:text-xs">
                  <form action="post" className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      id="name-update"
                      type="text"
                      placeholder="Mugiwara No Rambe"
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                  </form>
                  <form action="post" className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      id="email-update"
                      type="text"
                      placeholder="mugiwara@gmail.com"
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                  </form>
                  <form action="post" className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      No.Hp
                    </label>
                    <input
                      type="text"
                      placeholder="085216374519"
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                  </form>
                  <form action="post" className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      Alamat
                    </label>
                    <input
                      type="text"
                      placeholder="Jateng"
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                  </form>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-4 lg:w-full">
                <div className="flex flex-col gap-4 lg:mt-8">
                  <div className="font-bold lg:text-xs">
                    <h3>Additional Info</h3>
                  </div>
                  <div>
                    <form action="post" className="flex flex-col lg:text-xs">
                      <label htmlFor="" className="font-medium">
                        About
                      </label>
                      <textarea
                        id="about-update"
                        placeholder="Text.."
                        className="w-full max-w-xs lg:h-16 border-b-4 bg-[#F2F4F8] focus:outline-none"
                      />
                    </form>
                  </div>
                </div>
                <div className="flex mt-10 lg:justify-end lg:items-end">
                  <div className="flex flex-row justify-end gap-4">
                    <div className="bg-[#02020259] lg:text-sm items-center flex text-white px-4 lg:h-[35px] rounded-lg shadow-lg">
                      <button>Cancel</button>
                    </div>
                    <div className="bg-red-700 lg:text-sm text-white items-center flex px-4 lg:h-[35px] rounded-lg hover:bg-red-500 shadow-lg">
                      <button type="submit" onClick={handleSave}>
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
