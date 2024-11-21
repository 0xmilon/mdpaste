const { execSync } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for feature name
readline.question('Enter feature name (e.g., search-component): ', (featureName) => {
  try {
    // Create and checkout new feature branch
    execSync(`git checkout -b feature/${featureName}`, { stdio: 'inherit' });
    
    console.log('\n✨ Feature branch created successfully!');
    console.log(`\nNext steps:`);
    console.log(`1. Make your changes for the ${featureName} feature`);
    console.log(`2. Commit your changes: git commit -m "feat: add ${featureName}"`);
    console.log(`3. Push to remote: git push origin feature/${featureName}`);
    console.log(`4. Create a pull request to merge into main\n`);
    
    readline.close();
  } catch (error) {
    console.error('Error creating feature branch:', error.message);
    readline.close();
    process.exit(1);
  }
});
