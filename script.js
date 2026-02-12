function openProject(id, url) {
            const btn = document.getElementById(id);
            btn.addEventListener("click", () => {
                btn.classList.add('loading');
                const originalText = btn.innerHTML;
                btn.innerHTML = "Opening Project...";
                
                setTimeout(() => {
                    window.location.href = url;
                     btn.innerText = originalText;
                }, 800);
            });
        }

        openProject("mainProjects", "mainProject.html");
        openProject("quizApp", "quizHelper.html");
        openProject("joke", "AiJokeGenerator.html");
        openProject("positiveAffirmation", "affirmation.html");
