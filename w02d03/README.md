# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* computers talking to each other

### Protocols
* standardized way of sending messages

### Internet Protocol (IP)
* addressing computers
* ip address
  * IPv4: 192.168.0.0 127.0.0.1
  * IPv6: 2001:db8:3333:4444:5555:6666:7777:8888
* ports - apartment numbers
  * 65,535 ports to choose from
  * 80 http
  * 443 https
  * 5432 postgres
  * 3000 - 8000 development purposes

### Packets
* divided up into packets
* header => address of the origin and the destination

### TCP = Transport Control Protocol
* larger header sizes
* requires a connection (3 way handshake)
* security

### UDP = User Datagram Protocol
* smaller header sizes
* connectionless
* low latency applications (streaming)

server => has information
clients => want information

server <== TCP ==> clients


















