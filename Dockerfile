FROM mhart/alpine-node
COPY index.js .
RUN ln -sf /dev/stdout /debug.log
CMD node index.js
