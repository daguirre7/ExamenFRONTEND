import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {ILanguage} from "../interfaces/language";

import {getLanguagesCategoria} from "../services/categories";
import {useParams} from "react-router-dom";

const CategoriaLanguage: React.FC = () => { 

    const [languagesc,setLanguages] = useState([]);
    const [update,setUpdate] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        if(update){
            getLanguagesCategoria(id).then( r=>{                
                setUpdate(false);
                setLanguages(r.data);
            });
        }      
    },[update]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">

                {languagesc.map((lan: ILanguage,String) => (
                        <Subheader 
                        title={lan.category[0].name}
                        />
                    ))}
                <div className="row text-center">

                    {languagesc.map((lan: ILanguage,index) => (
                        <Card 
                            title={lan.name} 
                            description={lan.description} 
                            key={lan._id} 
                            category={lan.category[0].name}
                            LanguageId={lan._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default CategoriaLanguage;