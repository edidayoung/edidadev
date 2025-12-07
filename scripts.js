window.addEventListener('load', function() {
    // Remove hash from URL without triggering scroll
    history.replaceState(null, null, ' ');
    // Then scroll to top
    window.scrollTo(0, 0);
});
// Mobile menu toggle functionality
const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');
const navLinks = document.querySelector('.nav-links');


if (menuIcon && closeIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.style.right = "0";
    });

    closeIcon.addEventListener('click', () => {
        navLinks.style.right = "-200px";
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.style.right = "-200px";
        });
    });

     // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        // Check if click is outside the nav menu and menu is open
        if (!navLinks.contains(e.target) && 
            !menuIcon.contains(e.target) && 
            navLinks.style.right === "0px") {
            navLinks.style.right = "-200px";
        }
    });
}

// Bio Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const bioCards = document.querySelectorAll('.bio-card');
    const modals = document.querySelectorAll('.bio-modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    
    // Open modal when card is clicked
    bioCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });
    
    // Close modal when close button is clicked
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.bio-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });
    
    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scrolling
                }
            });
        }
    });
});

// Skill bars that fill when hovering the entire card
function initializeSkillBars() {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach(category => {
    const progressBars = category.querySelectorAll('.skill-progress');
    const percentTexts = category.querySelectorAll('.skill-percent');
    
    // Store target widths for each progress bar in the category
    progressBars.forEach((bar, index) => {
      const targetLevel = bar.getAttribute('data-level');
      bar.style.setProperty('--target-width', targetLevel + '%');
      
      // Hover event for entire category
      category.addEventListener('mouseenter', () => {
        bar.style.width = targetLevel + '%';
        percentTexts[index].textContent = targetLevel + '%';
      });
      
      // Mouse leave to reset
      category.addEventListener('mouseleave', () => {
        bar.style.width = '0%';
        percentTexts[index].textContent = '0%';
      });
    });
  });
}

// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show after 300px of scrolling
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeSkillBars);

// Skills Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter skill cards
      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all') {
          card.classList.remove('hidden');
          // Trigger animation
          setTimeout(() => {
            card.style.animation = 'fadeInUp 0.5s ease forwards';
          }, 50);
        } else if (category === filter) {
          card.classList.remove('hidden');
          // Trigger animation
          setTimeout(() => {
            card.style.animation = 'fadeInUp 0.5s ease forwards';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});


// Mobile Skill Card Click Toggle (DISABLED - descriptions hidden on mobile)
// Descriptions only work on desktop with hover
