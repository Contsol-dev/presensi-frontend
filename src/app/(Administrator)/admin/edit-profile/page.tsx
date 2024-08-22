"use client";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Administrator() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("/avatar1.jpg");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [about, setAbout] = useState("");
  const [adminId, setAdminId] = useState("");
  let id: any;
  if (typeof window !== "undefined") {
    id = sessionStorage.getItem("id");
  }
  if (!id) {
    router.push("/admin/login");
  }

  const fecthProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/profile/` + id
      );
      const nama = response.data.profile.nama;
      const email = response.data.profile.email;
      const photo = response.data.profile.photo;
      const about = response.data.profile.about;
      const admin_id = response.data.profile.id;
      const alamat = response.data.profile.alamat;
      const no_hp = response.data.profile.no_hp;
      setName(nama);
      setEmail(email);
      setAvatarUrl(photo);
      setAbout(about);
      setAdminId(admin_id);
      setAlamat(alamat);
      setNoHp(no_hp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthProfile();
  }, []);

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

  const handleSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("admin_id", adminId);
    formData.append("nama", name);
    formData.append("email", email);
    formData.append("no_hp", noHp);
    formData.append("alamat", alamat);
    formData.append("about", about);

    if (selectedImage) {
      formData.append("photo", selectedImage);
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        console.log("Profil Admin Tersimpan");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
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
            <form onSubmit={handleSave} className="flex flex-col">
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
                    <label htmlFor="" className="font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      id="name-update"
                      type="text"
                      placeholder="Nama Admin"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      id="email-update"
                      type="text"
                      placeholder="Email Admin"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                    <label htmlFor="" className="font-medium">
                      No.Hp
                    </label>
                    <input
                      type="text"
                      placeholder="081234567890"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                    <label htmlFor="" className="font-medium">
                      Alamat
                    </label>
                    <input
                      type="text"
                      placeholder="Alamat Admin"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      className="w-full max-w-lg lg:h-10 border-b-4 bg-[#F2F4F8] focus:outline-none pl-4"
                    />
                  </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 gap-4 lg:w-full">
                  <div className="flex flex-col gap-4 lg:mt-8">
                    <div className="font-bold lg:text-xs">
                      <h3>Additional Info</h3>
                    </div>
                    <div>
                      <label htmlFor="" className="font-medium">
                        About
                      </label>
                      <textarea
                        id="about-update"
                        placeholder="Text.."
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="w-full max-w-xs lg:h-16 border-b-4 bg-[#F2F4F8] focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex mt-10 lg:justify-end lg:items-end">
                    <div className="flex flex-row justify-end gap-4">
                      <div className="bg-[#02020259] lg:text-sm items-center flex text-white px-4 lg:h-[35px] rounded-lg shadow-lg">
                        <button>Cancel</button>
                      </div>
                      <div className="bg-red-700 lg:text-sm text-white items-center flex px-4 lg:h-[35px] rounded-lg hover:bg-red-500 shadow-lg">
                        <button type="submit">Update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
