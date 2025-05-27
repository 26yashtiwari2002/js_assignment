// dowload ka function
function download(URL){
    console.log("downloading from URL",URL);
    return new Promise((res)=>{
        setTimeout(()=>{
        console.log("download complete");
        const content="ABC";
        res(content);
    },5000);
    });
    
}


//download function ka call
download(URL, (content) => {
    console.log("Data:", content);
});

// write krna h file me
function writeinfile(content){
    const filename="file1.txt";
    console.log("writing content in",filename);
    return new Promise((res)=>{
        setTimeout(()=>{
       
        console.log("writing done :D");
        res(filename);
    },3000);
    })
    
}

// upload krna h data dusri jagah
function uploadtonewurl(content,cb){
    const filename="file1.txt";
    const uploadurl="uploading_url.com";
    console.log("uploading content",filename);
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("uploaded to:",uploadurl);
        console.log("uploading done :D");
        
        res(uploadurl);
    },3000);
    });
    
}


// final function jo result dikhayega
download("downloading_url.com")
.then(writeinfile)
.then(uploadtonewurl)
.then((uploadurl)=>
{
    console.log("all done :D");   
});
