# BASE
FROM node:16.14-bullseye-slim AS base
LABEL org.opencontainers.image.source=https://github.com/caldera-network/telegram-webapp

# TODO: Remove build arg in favor of docker run -e DOPPLER_TOKEN=${{ secrets.DOPPLER_TOKEN }}
ARG DOPPLER_TOKEN
ENV DOPPLER_TOKEN ${DOPPLER_TOKEN}

RUN apt-get update -qq && \
    apt-get upgrade -y -qq && \
    apt-get install -y -qq --no-install-recommends curl procps python3 wget yarn apt-transport-https ca-certificates curl gnupg && \
    curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | apt-key add - && \
    echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" | tee /etc/apt/sources.list.d/doppler-cli.list && \
    apt-get update && \
    apt-get -y install doppler && \
    rm -rf /root.cache && \
    rm -rf /tmp/* && \
    rm -rf /var/lib/apt/lists*

RUN adduser --disabled-password --gecos '' caldera-network
WORKDIR /home/caldera-network
USER caldera-network

# BUILD
FROM base as build
ADD --chown=caldera-network:caldera-network . .
RUN yarn --immutable --immutable-cache
# RUN yarn lint
# RUN yarn test
RUN yarn build

# TEST
FROM build as test
# RELEASE
FROM build as release
COPY --from=build --chown=caldera-network:caldera-network /home/caldera-network/.next ./.next
COPY --from=build --chown=caldera-network:caldera-network /home/caldera-network/node_modules ./node_modules
COPY --from=build --chown=caldera-network:caldera-network /home/caldera-network/package.json ./

EXPOSE 3000
CMD ["yarn", "start"]