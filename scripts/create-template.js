const { execSync } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for template name
readline.question('Enter template name (e.g., dark-theme): ', (templateName) => {
  try {
    // Create and checkout new template branch
    execSync(`git checkout -b template/${templateName}`, { stdio: 'inherit' });
    
    console.log('\n✨ Template branch created successfully!');
    console.log(`\nNext steps:`);
    console.log(`1. Make your changes for the ${templateName} template`);
    console.log(`2. Commit your changes: git commit -m "template: add ${templateName}"`);
    console.log(`3. Push to remote: git push origin template/${templateName}`);
    console.log(`4. Create a pull request to merge into main\n`);
    
    readline.close();
  } catch (error) {
    console.error('Error creating template branch:', error.message);
    readline.close();
    process.exit(1);
  }
});
