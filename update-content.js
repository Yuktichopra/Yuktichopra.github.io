#!/usr/bin/env node

/**
 * Simple content update helper script
 * Usage: node update-content.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contentDir = path.join(__dirname, 'src', 'content', 'site');

// Helper function to read JSON file
function readJSON(filename) {
  const filepath = path.join(contentDir, filename);
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

// Helper function to write JSON file
function writeJSON(filename, data) {
  const filepath = path.join(contentDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  console.log(`✅ Updated ${filename}`);
}

// Main menu
function showMenu() {
  console.log('\n📝 Content Update Helper\n');
  console.log('What would you like to update?');
  console.log('1. Homepage Hero (name, tagline, description)');
  console.log('2. Add Timeline Entry');
  console.log('3. Update Currently Working On');
  console.log('4. Add Recent Writing Entry');
  console.log('5. Update Navigation Menu');
  console.log('6. Exit\n');
  
  rl.question('Enter your choice (1-6): ', (answer) => {
    switch(answer) {
      case '1':
        updateHero();
        break;
      case '2':
        addTimelineEntry();
        break;
      case '3':
        updateCurrently();
        break;
      case '4':
        addRecentWriting();
        break;
      case '5':
        updateNavigation();
        break;
      case '6':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        showMenu();
    }
  });
}

// Update hero section
function updateHero() {
  const hero = readJSON('hero.json');
  
  console.log('\nCurrent Hero Content:');
  console.log(`Name: ${hero.name}`);
  console.log(`Tagline: ${hero.tagline}`);
  console.log(`Description: ${hero.description}\n`);
  
  rl.question('New name (press Enter to keep current): ', (name) => {
    if (name) hero.name = name;
    
    rl.question('New tagline (press Enter to keep current): ', (tagline) => {
      if (tagline) hero.tagline = tagline;
      
      rl.question('New description (press Enter to keep current): ', (description) => {
        if (description) hero.description = description;
        
        writeJSON('hero.json', hero);
        showMenu();
      });
    });
  });
}

// Add timeline entry
function addTimelineEntry() {
  const timeline = readJSON('timeline.json');
  
  rl.question('Year (e.g., 2025): ', (year) => {
    rl.question('Month (e.g., Jan): ', (date) => {
      rl.question('Title: ', (title) => {
        rl.question('Type (milestone/research/writing/project): ', (type) => {
          rl.question('Link (optional, press Enter to skip): ', (link) => {
            
            // Find or create year group
            let yearGroup = timeline.timeline.find(y => y.year === year);
            if (!yearGroup) {
              yearGroup = { year, entries: [] };
              timeline.timeline.unshift(yearGroup);
              timeline.timeline.sort((a, b) => b.year - a.year);
            }
            
            // Add entry
            const entry = { date, title, type };
            if (link) entry.link = link;
            yearGroup.entries.unshift(entry);
            
            writeJSON('timeline.json', timeline);
            console.log('✅ Timeline entry added!');
            showMenu();
          });
        });
      });
    });
  });
}

// Update currently section
function updateCurrently() {
  const currently = readJSON('currently.json');
  
  console.log('\nCurrent Activities:');
  currently.activities.forEach((act, i) => {
    console.log(`${i + 1}. ${act.category}: ${act.description}`);
  });
  
  console.log('\nOptions:');
  console.log('1. Update existing activity');
  console.log('2. Add new activity');
  console.log('3. Back to menu');
  
  rl.question('Choice: ', (choice) => {
    if (choice === '1') {
      rl.question('Which number to update? ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < currently.activities.length) {
          rl.question('New category: ', (category) => {
            rl.question('New description: ', (description) => {
              currently.activities[index] = { category, description };
              writeJSON('currently.json', currently);
              showMenu();
            });
          });
        } else {
          console.log('Invalid number');
          updateCurrently();
        }
      });
    } else if (choice === '2') {
      rl.question('Category: ', (category) => {
        rl.question('Description: ', (description) => {
          currently.activities.push({ category, description });
          writeJSON('currently.json', currently);
          showMenu();
        });
      });
    } else {
      showMenu();
    }
  });
}

// Add recent writing
function addRecentWriting() {
  const writing = readJSON('recent-writing.json');
  
  rl.question('Article title: ', (title) => {
    rl.question('Summary: ', (summary) => {
      rl.question('Date (e.g., Jan 2025): ', (date) => {
        rl.question('Read time (e.g., 8 min): ', (readTime) => {
          rl.question('Link (e.g., /blog/article-slug): ', (link) => {
            
            writing.articles.unshift({
              title,
              summary,
              date,
              readTime,
              link
            });
            
            // Keep only top 3 articles
            writing.articles = writing.articles.slice(0, 3);
            
            writeJSON('recent-writing.json', writing);
            console.log('✅ Article added to recent writing!');
            showMenu();
          });
        });
      });
    });
  });
}

// Update navigation
function updateNavigation() {
  const nav = readJSON('navigation.json');
  
  console.log('\nCurrent Navigation:');
  nav.mainNav.forEach((item, i) => {
    console.log(`${i + 1}. ${item.label} -> ${item.href}`);
  });
  
  console.log('\nOptions:');
  console.log('1. Add menu item');
  console.log('2. Remove menu item');
  console.log('3. Back to menu');
  
  rl.question('Choice: ', (choice) => {
    if (choice === '1') {
      rl.question('Label: ', (label) => {
        rl.question('Link (e.g., /page): ', (href) => {
          nav.mainNav.push({ label, href });
          writeJSON('navigation.json', nav);
          showMenu();
        });
      });
    } else if (choice === '2') {
      rl.question('Which number to remove? ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < nav.mainNav.length) {
          nav.mainNav.splice(index, 1);
          writeJSON('navigation.json', nav);
          showMenu();
        } else {
          console.log('Invalid number');
          updateNavigation();
        }
      });
    } else {
      showMenu();
    }
  });
}

// Start the program
console.log('🚀 Content Update Helper for Yukipedia\n');
showMenu();