const yargs = require('yargs');
const command = process.argv[2];


if(command ==='add'){
  console.log('Adding note.');
} else if(command ==='remove'){
  console.log('Removing note!');
} else {
  console.log('Type correct command.');
}

//Customize yargs version
yargs.version('1.1.0');

yargs.command({
  command:'add',
  describe:"Add a new note",
  handler:function(){
    console.log('Adding a new note!');
  }
});

yargs.command({
  command:'remove',
  describe:"Remove a new note",
  handler:function(){
    console.log('Removing a new note!');
  }
});

yargs.command({
  command:'list',
  describe:"List your notes",
  handler:function(){
    console.log('Listing out all notes');
    
  }
})


yargs.command({
  command:'read',
  describe:"Read a note",
  handler:function(){
    console.log('Reading a note');
  }
})

console.log(yargs.argv);