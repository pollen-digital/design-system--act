import { createL22 } from "../../l2-logos/l22-cobranded-logo/component";

export const createW15 = ({
  title,
}) => {

  const logo = createL22({
    colour: "white",
    cobrand: "access-canberra",
    type1: "horizontal",
    type2: "cobrand-logo",
    alt1: "ACT Government",
    alt2: "Access Canberra",
  });

  const megamenuHTML = `
  <script>
          //For demo purposes only
          function toggleSubMenu(open) {
            const mainMenu = document.querySelector(".act-megamenu__content__block-main-menu");
            const subMenu = document.querySelector(".act-megamenu__content__block-sub-menu");
            console.log(open)
            if(open) {
              subMenu.classList.remove("hidden-mobile")
              mainMenu.classList.add("hidden-mobile")
            } else {
              subMenu.classList.add("hidden-mobile")
              mainMenu.classList.remove("hidden-mobile")
            }
          }

          function openChildLinks(e) {
            
            const element = e.currentTarget;
            const num = element.id.split("-")[3];

            //make sub-menu visible
            toggleSubMenu(true)
            
            const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
            for (const childElement of visibleChildElements) {
              childElement.style.display = "none";
            }
            const childElement = document.querySelector("#sub-menu-" + num);
            if (!childElement) {
              return;
            }
            childElement.style.display = "grid";
          }
          // End demo code
        </script>
        
  <div class="act-megamenu">
    <div class="act-megamenu__container">
				<div class="act-megamenu__content__block-main-menu">
          <div class="act-megamenu__section-heading">
            Home
          </div>
          <div class="act-megamenu__link-container">
            <div class="act-megamenu__link" id="main-menu-link-1" onclick="openChildLinks(event)">
              <div class="act-megamenu__link__text">
                Link 1
              </div>
              <div class="act-megamenu__link__icon">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="act-megamenu__link" id="main-menu-link-2" onclick="openChildLinks(event)">
              <div class="act-megamenu__link__text">
              Information and support
              </div>
              <div class="act-megamenu__link__icon">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="act-megamenu__link" id="main-menu-link-3" onclick="openChildLinks(event)">
              <div class="act-megamenu__link__text">
                Link 3
              </div>
              <div class="act-megamenu__link__icon">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="act-megamenu__content__block-sub-menu hidden-mobile" id="sub-menu">
          <button role="button" class="back-button" onclick="toggleSubMenu(false)">
              <span class="back-button__icon">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <span class="back-button__text">
                Back
              </span>
              
          </button>
          <div class="act-megamenu__sub-menu-link-container hidden" id="sub-menu-1">
            <div class="section-heading">
              Child Links 1
            </div>
            <div class="sub-menu-links-list">
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 11
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 12
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 13
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  External Link
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-external-link"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 15
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 16
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="act-megamenu__sub-menu-link-container hidden" id="sub-menu-2">
            <div class="section-heading">
              Information and support
            </div>
            <div class="sub-menu-links-list">
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  External Link
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-external-link"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 22
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 23
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 24
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 25
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 26
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="act-megamenu__sub-menu-link-container hidden" id="sub-menu-3">
            <div class="section-heading">
              Child Links 3
            </div>
            <div class="sub-menu-links-list">
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 31
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 32
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 33
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 34
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 35
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div class="act-megamenu__link">
                <div class="act-megamenu__link__text">
                  Sub Link 36
                </div>
                <div class="act-megamenu___link__icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
  
`;

  const megamenu = document.createElement("div");
  megamenu.className = "sb-act-navbar";
  megamenu.innerHTML = megamenuHTML;
  const megamenuExport = megamenu.innerHTML;
  return megamenuExport;

};
