// dowload ka function
function download(URL)
{
    return new Promise((res)=>
    {
        setTimeout(()=>
        {
        console.log("download complete");
        const content="ABC";
        res(content);
        },5000);
    });
    
}

// write krna h file me
function writeinfile(content)
{
    const filename="file1.txt";
    return new Promise((res)=>
    {
        setTimeout(()=>
        {
        console.log("writing done :D");
        res(filename);
        },3000);
    });
    
}

// upload krna h data dusri jagah
function uploadtonewurl(filename,url){
    // const filename="file1.txt";
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

// final function async await
async function process() {
    try{
        const URL=download_url.com
        
        const content=await download(URL);
        console.log(content);

        const filename=await writeinfile(content);
        console.log(filename);

        const uploading_url=await uploadtonewurl(filename,uploadurl);
        console.log(z);
    }
    catch(error){
        console.log("error occured",error);
    }  
}

