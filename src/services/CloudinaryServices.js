import axios from "axios";

const cloudName = "dqhhessok"
const preset = "repeat"

class CloudinaryService {

    async uploadImage(image) {
        try {
            // formData 
            let formData = new FormData()
            formData.append("file", image)
            formData.append("upload_preset", preset)

           let url=await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)

           return url.data.secure_url
        //    console.log(url.data.secure_url);
           

        } catch (error) {
            console.log(error);

        }
    }
}

export default new CloudinaryService