process.stdin.setEncoding('utf-8');

process.stdin.on('readable', ()=>{
    process.stdout.write('Commands: /exit, /env\n');
    let input = process.stdin.read();
    if(input !== null){
        switch(input.toString().trim()){
            case '/exit':
                process.stdout.write("Exiting\n");
                process.exit();
                break;
            case '/env':
                let lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES;
                process.stdout.write(`You're using ${lang} version of ${process.platform} operating system.\nYou're using ${process.version} version of nodejs.\n`);
                break;
            default:
                process.stderr.write(`Wrong instruction: ${input}.\n`);
        }
    }
});
