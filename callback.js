// dowload ka function
function download(URL,cb){
    console.log("downloading from URL",URL);
    setTimeout(()=>{
        console.log("download complete");
        const content="ABC";
        cb(content);
    },8000);
}

//download function ka call
download(URL, (content) => {
    console.log("Data:", content);
});

// write krna h file me
function writeinfile(content,cb){
    const filename="file1.txt";
    console.log("writing content in",filename);
    setTimeout(()=>{
       
        console.log("writing done :D");
        cb(content);
    },4000);
}

// upload krna h data dusri jagah
function uploadtonewurl(content,cb){
    const filename="file1.txt";
    const uploadurl="uploading_url.com";
    console.log("uploading content",filename);
    setTimeout(()=>{
        console.log("uploading to:",uploadurl);
        console.log("uploading done :D");
        
        cb(content);
    },4000);
}


// final function jo result dikhayega
download("downloding_url.com",function process(content)
{
    console.log("downloaded data:",content);
    writeinfile(content,function process(content)
    {
        uploadtonewurl(content, function process(uploading_url)
        {
            console.log("all done");
        });
    });
});
