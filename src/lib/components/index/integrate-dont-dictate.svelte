<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Section from "../section.svelte";
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  .icon {
    height: 45px;
    width: 45px;

    @media (max-width: 1140px) {
      height: 41px;
      width: 41px;
    }
  }
  .ide-icon {
    height: 46px;
    width: 46px;

    @media (max-width: 1140px) {
      height: 42px;
      width: 42px;
    }
  }
</style>

<Card size="medium" class="m-auto shadow-highlight w-10/12">
  <Section class="text-center {clazz}" {...$$restProps}>
    <h2 class="text-2xl sm:text-[32px] text-left ml-4 sm:ml-16 mb-4">
      Integrate with your existing development infrastructure
    </h2>
    <div
      class="flex flex-wrap items-center mx-auto justify-evenly mb-6 ml-6 mr-6"
    >
      <div class="grid grid-rows-2 grid-flow-col gap-x-small">
        <!-- Git Provider options -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-black py-micro pl-xx-small text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-sm sm:text-lg text-important font-bold">
            Connect Git provider
          </p>

          <div class="flex justify-left items-center mt-4 gap-x-4 sm:gap-x-6">
            <img src="/svg/gitlab.svg" alt="GitLab" class="icon" />
            <svg
              class="icon"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path
                d="M14.57.5a14.374 14.374 0 00-9.442 3.54 14.947 14.947 0 00-4.94 8.946A15.133 15.133 0 002.106 23.07a14.615 14.615 0 007.862 6.406c.733.137.992-.329.992-.721v-2.528c-4.065.903-4.923-1.999-4.923-1.999a3.97 3.97 0 00-1.617-2.181c-1.314-.913.107-.913.107-.913.46.067.9.24 1.285.505.386.265.707.617.94 1.029.197.366.464.688.784.949a3.047 3.047 0 003.45.292c.057-.751.374-1.457.894-1.99-3.234-.374-6.63-1.652-6.63-7.3a5.82 5.82 0 011.493-3.989 5.529 5.529 0 01.143-3.933s1.224-.402 4.002 1.524a13.49 13.49 0 017.291 0c2.779-1.926 3.994-1.524 3.994-1.524.536 1.233.6 2.627.179 3.906a5.82 5.82 0 011.492 3.988c0 5.713-3.404 6.963-6.648 7.3.348.358.617.787.788 1.26.17.472.24.976.204 1.479v4.079c0 .484.26.858 1 .712a14.623 14.623 0 007.752-6.43 15.134 15.134 0 001.87-10.019 14.949 14.949 0 00-4.89-8.892A14.377 14.377 0 0014.57.5z"
                fill="#F9F9F9"
                class="fill-black dark:fill-white"
              />
            </svg>
            <img src="/svg/bitbucket.svg" alt="Bitbucket" class="icon" />
          </div>
        </div>

        <!-- Cloud Services Options -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-black py-micro pl-xx-small text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-sm sm:text-lg text-important font-bold">
            Select your cloud - yours or ours
          </p>

          <div
            class="flex flex-wrap justify-left items-center mt-4 gap-x-4 sm:gap-x-6"
          >
            <svg
              width="48"
              height="29"
              viewBox="0 0 48 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <title>AWS</title>
              <path
                d="M13.6424 10.7359C13.6424 11.3202 13.7055 11.7938 13.816 12.1412C13.9424 12.4886 14.1002 12.8675 14.3213 13.278C14.4002 13.4044 14.4318 13.5307 14.4318 13.6412C14.4318 13.7991 14.3371 13.957 14.1318 14.1149L13.1371 14.778C12.995 14.8728 12.8529 14.9202 12.7266 14.9202C12.5687 14.9202 12.4108 14.8412 12.2529 14.6991C12.0318 14.4623 11.8424 14.2096 11.6845 13.957C11.5266 13.6886 11.3687 13.3886 11.195 13.0254C9.96341 14.478 8.41604 15.2044 6.55288 15.2044C5.22656 15.2044 4.16867 14.8254 3.39498 14.0675C2.6213 13.3096 2.22656 12.2991 2.22656 11.0359C2.22656 9.69384 2.70025 8.60436 3.6634 7.78331C4.62656 6.96226 5.90551 6.55173 7.53183 6.55173C8.06867 6.55173 8.6213 6.5991 9.20551 6.67805C9.78972 6.75699 10.3897 6.88331 11.0213 7.02542V5.87278C11.0213 4.67278 10.7687 3.83594 10.2792 3.34647C9.77393 2.85699 8.9213 2.62015 7.70551 2.62015C7.15288 2.62015 6.58446 2.68331 6.00025 2.82541C5.41604 2.96752 4.84762 3.1412 4.29498 3.36226C4.04235 3.47278 3.85288 3.53594 3.74235 3.56752C3.63183 3.5991 3.55288 3.61489 3.48972 3.61489C3.26867 3.61489 3.15814 3.45699 3.15814 3.12541V2.35173C3.15814 2.0991 3.18972 1.90963 3.26867 1.7991C3.34762 1.68857 3.48972 1.57805 3.71077 1.46752C4.2634 1.18331 4.92656 0.946468 5.70025 0.756994C6.47393 0.551731 7.29498 0.456994 8.1634 0.456994C10.0424 0.456994 11.416 0.88331 12.3002 1.73594C13.1687 2.58857 13.6108 3.88331 13.6108 5.62015V10.7359H13.6424ZM7.23183 13.1359C7.75288 13.1359 8.28972 13.0412 8.85814 12.8517C9.42656 12.6623 9.93183 12.3149 10.3581 11.8412C10.6108 11.5412 10.8002 11.2096 10.895 10.8307C10.9897 10.4517 11.0529 9.99384 11.0529 9.45699V8.79384C10.595 8.68331 10.1055 8.58857 9.60025 8.52542C9.09498 8.46226 8.60551 8.43068 8.11604 8.43068C7.05814 8.43068 6.28446 8.63594 5.7634 9.06226C5.24235 9.48857 4.98972 10.0886 4.98972 10.878C4.98972 11.6202 5.17919 12.1728 5.57393 12.5517C5.95288 12.9465 6.50551 13.1359 7.23183 13.1359ZM19.9108 14.8412C19.6266 14.8412 19.4371 14.7938 19.3108 14.6833C19.1845 14.5886 19.0739 14.3675 18.9792 14.0675L15.2687 1.86226C15.1739 1.54647 15.1266 1.3412 15.1266 1.23068C15.1266 0.978047 15.2529 0.835941 15.5055 0.835941H17.0529C17.3529 0.835941 17.5581 0.88331 17.6687 0.993836C17.795 1.08857 17.8897 1.30963 17.9845 1.60963L20.6371 12.0623L23.1002 1.60963C23.1792 1.29384 23.2739 1.08857 23.4002 0.993836C23.5266 0.899099 23.7476 0.835941 24.0318 0.835941H25.295C25.595 0.835941 25.8002 0.88331 25.9266 0.993836C26.0529 1.08857 26.1634 1.30963 26.2266 1.60963L28.7213 12.1886L31.4529 1.60963C31.5476 1.29384 31.6581 1.08857 31.7687 0.993836C31.895 0.899099 32.1002 0.835941 32.3845 0.835941H33.8529C34.1055 0.835941 34.2476 0.962257 34.2476 1.23068C34.2476 1.30963 34.2318 1.38857 34.216 1.48331C34.2002 1.57805 34.1687 1.70436 34.1055 1.87805L30.3002 14.0833C30.2055 14.3991 30.095 14.6044 29.9687 14.6991C29.8424 14.7938 29.6371 14.857 29.3687 14.857H28.0108C27.7108 14.857 27.5055 14.8096 27.3792 14.6991C27.2529 14.5886 27.1424 14.3833 27.0792 14.0675L24.6318 3.88331L22.2002 14.0517C22.1213 14.3675 22.0266 14.5728 21.9002 14.6833C21.7739 14.7938 21.5529 14.8412 21.2687 14.8412H19.9108ZM40.2002 15.2675C39.3792 15.2675 38.5581 15.1728 37.7687 14.9833C36.9792 14.7938 36.3634 14.5886 35.9529 14.3517C35.7002 14.2096 35.5266 14.0517 35.4634 13.9096C35.4002 13.7675 35.3687 13.6096 35.3687 13.4675V12.6623C35.3687 12.3307 35.495 12.1728 35.7318 12.1728C35.8266 12.1728 35.9213 12.1886 36.016 12.2202C36.1108 12.2517 36.2529 12.3149 36.4108 12.378C36.9476 12.6149 37.5318 12.8044 38.1476 12.9307C38.7792 13.057 39.395 13.1202 40.0266 13.1202C41.0213 13.1202 41.795 12.9465 42.3318 12.5991C42.8687 12.2517 43.1529 11.7465 43.1529 11.0991C43.1529 10.657 43.0108 10.2938 42.7266 9.99384C42.4424 9.69384 41.9055 9.42541 41.1318 9.17278L38.8424 8.46226C37.6897 8.0991 36.8371 7.56226 36.316 6.85173C35.795 6.15699 35.5266 5.38331 35.5266 4.56226C35.5266 3.8991 35.6687 3.31489 35.9529 2.80963C36.2371 2.30436 36.616 1.86226 37.0897 1.51489C37.5634 1.15173 38.1002 0.88331 38.7318 0.693836C39.3634 0.504362 40.0266 0.425415 40.7213 0.425415C41.0687 0.425415 41.4318 0.441205 41.7792 0.488573C42.1424 0.535941 42.4739 0.599099 42.8055 0.662257C43.1213 0.741204 43.4213 0.820152 43.7055 0.914889C43.9897 1.00963 44.2108 1.10436 44.3687 1.1991C44.5897 1.32542 44.7476 1.45173 44.8424 1.59384C44.9371 1.72015 44.9845 1.89384 44.9845 2.11489V2.85699C44.9845 3.18857 44.8581 3.36226 44.6213 3.36226C44.495 3.36226 44.2897 3.2991 44.0213 3.17278C43.1213 2.76226 42.1108 2.55699 40.9897 2.55699C40.0897 2.55699 39.3792 2.6991 38.8897 2.9991C38.4002 3.2991 38.1476 3.75699 38.1476 4.40436C38.1476 4.84647 38.3055 5.22542 38.6213 5.52542C38.9371 5.82542 39.5213 6.12542 40.3581 6.39384L42.6002 7.10436C43.7371 7.46752 44.5581 7.97278 45.0476 8.62015C45.5371 9.26752 45.7739 10.0096 45.7739 10.8307C45.7739 11.5096 45.6318 12.1254 45.3634 12.6623C45.0792 13.1991 44.7002 13.6728 44.2108 14.0517C43.7213 14.4465 43.1371 14.7307 42.4581 14.9359C41.7476 15.157 41.0055 15.2675 40.2002 15.2675Z"
                fill="#F9F9F9"
                class="fill-black dark:fill-[#F9F9F9]"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.184 22.9412C37.9893 26.7781 30.4419 28.8149 23.9524 28.8149C14.8577 28.8149 6.66298 25.4517 0.473502 19.8623C-0.0159716 19.4202 0.426134 18.8202 1.01034 19.1675C7.70508 23.0517 15.963 25.4044 24.5051 25.4044C30.2682 25.4044 36.5998 24.2044 42.4261 21.7412C43.2946 21.3465 44.0367 22.3096 43.184 22.9412Z"
                fill="#FF9900"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.3472 20.478C44.6841 19.6254 40.9577 20.0675 39.2683 20.2727C38.763 20.3359 38.6841 19.8938 39.142 19.5622C42.1104 17.478 46.9893 18.078 47.5577 18.7727C48.1262 19.4833 47.3999 24.3622 44.6209 26.6991C44.1946 27.0622 43.7841 26.8727 43.9735 26.3991C44.6051 24.8359 46.0104 21.3148 45.3472 20.478Z"
                fill="#FF9900"
              />
            </svg>

            <img src="/svg/brands/gcp.svg" alt="GCP" class="icon" />
          </div>
        </div>
      </div>
      <div class="grid grid-rows-1">
        <!-- long IDE Section in center -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-sm sm:text-lg text-important font-bold mb-4">
            Choose IDEs and editors
          </p>

          <div
            class="items-center grid grid-cols-4 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-6 w-56 sm:w-72"
          >
            <img src="/svg/index/vscode.svg" alt="VS Code" class="ide-icon" />
            <img src="/svg/index/goland.svg" alt="GoLand" class="ide-icon" />
            <img
              src="/svg/index/intellij.svg"
              alt="IntelliJ"
              class="ide-icon"
            />
            <img src="/svg/index/pycharm.svg" alt="PyCharm" class="ide-icon" />
            <img
              src="/svg/index/phpstorm.svg"
              alt="PhpStorm"
              class="ide-icon"
            />
            <img
              src="/svg/index/webstorm.svg"
              alt="WebStorm"
              class="ide-icon"
            />
            <img src="/svg/index/clion.svg" alt="CLion" class="ide-icon" />
            <img
              src="/svg/index/rubymine.svg"
              alt="RubyMine"
              class="ide-icon"
            />
            <img src="/svg/index/rider.svg" alt="Rider" class="ide-icon" />
            <img src="/svg/index/vim.svg" alt="Vim" class="ide-icon" />
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 grid-flow-col">
        <!-- Customize Themes & Extensions  -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-black py-micro pl-xx-small text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-sm sm:text-lg text-important font-bold">
            Customize themes and extensions
          </p>

          <div
            class="flex items-center mt-4 gap-x-4 sm:gap-x-6 w-56 sm:w-72 mx-auto"
          >
            <img src="/svg/brands/prettier.png" alt="Prettier" class="icon" />
            <img
              src="/svg/brands/copilot.png"
              alt="GitHub Copilot"
              class="icon"
            />
            <img src="/svg/brands/gitlens.png" alt="GitLens" class="icon" />
            <img
              src="/svg/icons/more-options.svg"
              alt="More options"
              class="icon block dark:hidden"
            />
            <img
              src="/svg/icons/more-options-dark.svg"
              alt="More options"
              class="icon hidden dark:block"
            />
          </div>
        </div>

        <!-- Connect any dev resource -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-black py-micro pl-xx-small text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-sm sm:text-lg text-important font-bold">
            Connect any dev resource
          </p>

          <div class="flex items-center mt-4 gap-x-4 sm:gap-x-6 mx-auto">
            <img src="/svg/brands/redis.svg" alt="Redis" class="icon" />
            <img src="/svg/brands/aws-s3.png" alt="AWS S3" class="icon" />
            <svg
              width="24"
              height="51"
              viewBox="0 0 24 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <title>MongoDB</title>
              <g clip-path="url(#clip0_9031_19699)">
                <path
                  d="M16.4591 6.19345C14.3513 3.70367 12.5363 1.17497 12.1655 0.649783C12.1264 0.61088 12.0679 0.61088 12.0288 0.649783C11.658 1.17497 9.84298 3.70367 7.73521 6.19345C-10.3565 29.1656 10.5846 44.6685 10.5846 44.6685L10.7603 44.7851C10.9164 47.1778 11.3067 50.6206 11.3067 50.6206H12.0874H12.868C12.868 50.6206 13.2584 47.1972 13.4145 44.7851L13.5901 44.6491C13.6097 44.6491 34.5508 29.1656 16.4591 6.19345ZM12.0874 44.3183C12.0874 44.3183 11.1506 43.5208 10.8969 43.1123V43.0735L12.0288 18.0588C12.0288 17.981 12.1459 17.981 12.1459 18.0588L13.2779 43.0735V43.1123C13.0242 43.5208 12.0874 44.3183 12.0874 44.3183Z"
                  fill="#001E2B"
                  class="h-12 w-12 dark:fill-sand-dark"
                />
              </g>
              <defs>
                <clipPath id="clip0_9031_19699">
                  <rect
                    width="23.2558"
                    height="50"
                    fill="white"
                    transform="translate(0.37207 0.620605)"
                  />
                </clipPath>
              </defs>
            </svg>
            <img
              src="/svg/icons/more-options.svg"
              alt="More options"
              class="icon block dark:hidden"
            />
            <img
              src="/svg/icons/more-options-dark.svg"
              alt="More options"
              class="icon hidden dark:block"
            />
          </div>
        </div>
      </div>
    </div></Section
  >
</Card>
