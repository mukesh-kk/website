FROM gitpod/workspace-full-vnc:latest

ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Install Cypress dependencies.
RUN sudo apt-get update \
    && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    && sudo rm -rf /var/lib/apt/lists/*

# Install Firefox

RUN sudo apt-get update -q \
    && sudo apt-get install -yq \
    firefox \
    && sudo rm -rf /var/lib/apt/lists/*

RUN bash -c 'VERSION="18.13.0" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'
