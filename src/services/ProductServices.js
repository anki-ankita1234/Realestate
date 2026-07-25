import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc
} from "firebase/firestore";

import { db } from "../firebase";
import { ProductModel } from "../model/Products";

const dbPath = "products";

class ProductServices {

    async Add(Data) {
        try {
            let obj = new ProductModel();

            obj.ProductName = Data.name;
            obj.Description = Data.description;
            obj.Price = Number(Data.price);
            obj.Image = Data.image;
            obj.Category = Data.Category;

            await addDoc(collection(db, dbPath), { ...obj });

            return 1;
        } catch (err) {
            console.log(err);
            return 0;
        }
    }

    async ALL() {
        try {
            let ProductDocs = await getDocs(collection(db, dbPath));

            let ProductData = ProductDocs.docs.map((el) => {
                return {
                    id: el.id,
                    ...el.data()
                };
            });

            return ProductData;
        } catch (err) {
            console.log(err);
        }
    }

    async Delete(id) {
        try {
            await deleteDoc(doc(db, dbPath, id));
            return 1;
        } catch (err) {
            console.log(err);
            return 0;
        }
    }

    async Single(id) {
        try {
            let ProductDoc = await getDoc(doc(db, dbPath, id));
            return ProductDoc.data();
        } catch (err) {
            console.log(err);
        }
    }

    async Update(Data, id) {
        try {
            let obj = new ProductModel();

            obj.ProductName = Data.name;
            obj.Description = Data.description;
            obj.Price = Number(Data.price);
            obj.Image = Data.image;

            await updateDoc(doc(db, dbPath, id), { ...obj });

            return 1;
        } catch (err) {
            console.log(err);
            return 0;
        }
    }
}

export default new ProductServices();