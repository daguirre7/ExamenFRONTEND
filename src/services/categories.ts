import axios from "axios";

const query: string = "http://localhost:3001"


export function getCategories(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

export function getLanguagesCategoria(id:any): Promise<any>{       
    return new Promise<any>(resolve =>{
        axios.get(`${query}/categories/${id}`)
            .then(result => resolve(result) )
            .catch(error => resolve( {data: {successed:false}} ) );            
    });
};

export function getCategoriesWLanguages(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories/languages`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

export function deleteCategory(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/category/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve({successed:false}));
    });
}
