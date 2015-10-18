# SharedChain Objects

## Link
A link is created by a Service or an Entity. 
A service is able to register new transaction links in the SharedChain.
An Entity can only participate in Service transactions. This is not to say that the Entity cannot initiate the transaction.

### Link Schema
{
  "service": "storage",
  "publicKey": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDnx8iW6ydpkbg9QUng6+kVHTcUAp/HY5pwBshJNTcfJL70vFYC/J58jUuxBmkbuVQJcngzX9eXsPcDZNUKhsZVrchdENtE65eVznVik/yo4fSw1yidiZAR/SxHfBnrz7pmqnpvJwYh5nwG3KrGf0d3jI+eelEZeKjFQ4n+ltQcFtkdFqK9zGFruJ4Gj21onUtLtmyW5chkWOxjRi2gy+lfIXbVL/gOPO42WOrV15wbQi4bMdS1UYA8tTQB1RD4q+Rn4mJeiEzW7SjobpXuqz/kebsPY/PPwFm37LGCOhpZnBO/RsJQ9Jd+CQuc7ZDwCcGZDP6v6Y9Q+YJ0P4RT5YxR"
  "timestamp": "2015-10-07 06:46:12",
  "sUUID": "de305d54-75b4-431b-adb2-eb6b9e546014",
   "paymentTXID": "14663133b379c7g596e7d0fda89d255e79fa3aaf243f81011b570aff66047224"
}

## Link Types

### Service Registration
Registers a new Service Link (SL) in the SharedChain (SC).

#### Rules
    1. Must be a valid registration object.
    2. The name cannot already be in use.
    3. Must include a registration payment.

#### Object Schema
{
  "service": "storage",
  "publicKey": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDnx8iW6ydpkbg9QUng6+kVHTcUAp/HY5pwBshJNTcfJL70vFYC/J58jUuxBmkbuVQJcngzX9eXsPcDZNUKhsZVrchdENtE65eVznVik/yo4fSw1yidiZAR/SxHfBnrz7pmqnpvJwYh5nwG3KrGf0d3jI+eelEZeKjFQ4n+ltQcFtkdFqK9zGFruJ4Gj21onUtLtmyW5chkWOxjRi2gy+lfIXbVL/gOPO42WOrV15wbQi4bMdS1UYA8tTQB1RD4q+Rn4mJeiEzW7SjobpXuqz/kebsPY/PPwFm37LGCOhpZnBO/RsJQ9Jd+CQuc7ZDwCcGZDP6v6Y9Q+YJ0P4RT5YxR"
  "timestamp": "2015-10-01 12:23:56",
  "paymentTXID": "e79fa3aaf243f81011b570aff6604722414663133b379c7g596e7d0fda89d255"
}

    
### Service Modification
Updates an existing Service registration.

#### Rules
    1. Must be a valid registration update object.
    2. The name must match the previous name.
    3. Must include a registration update payment.
    
#### Object Schema
{
  "service": "storage",
  "publicKey": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDnx8iW6ydpkbg9QUng6+kVHTcUAp/HY5pwBshJNTcfJL70vFYC/J58jUuxBmkbuVQJcngzX9eXsPcDZNUKhsZVrchdENtE65eVznVik/yo4fSw1yidiZAR/SxHfBnrz7pmqnpvJwYh5nwG3KrGf0d3jI+eelEZeKjFQ4n+ltQcFtkdFqK9zGFruJ4Gj21onUtLtmyW5chkWOxjRi2gy+lfIXbVL/gOPO42WOrV15wbQi4bMdS1UYA8tTQB1RD4q+Rn4mJeiEzW7SjobpXuqz/kebsPY/PPwFm37LGCOhpZnBO/RsJQ9Jd+CQuc7ZDwCcGZDP6v6Y9Q+YJ0P4RT5YxR"
  "timestamp": "2015-10-23 12:15:32",
  "paymentTXID": "7gf81011b570aff6604722414663596e7e79fa3aaf243133b379cd0fda89d255"
}

### Service Name Change
Change the name of the Service Link.
For efficiency and clarity we do not want this to occur often. We may become more relaxed on this over time.

#### Rules
    1. Must be a valid registration name change object.
    2. The name must match the previous name.
    3. The new name must be available.
    3. Must include a service name change payment.
    
#### Object SChema
{
  "service": "storage",
  "publicKey": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDnx8iW6ydpkbg9QUng6+kVHTcUAp/HY5pwBshJNTcfJL70vFYC/J58jUuxBmkbuVQJcngzX9eXsPcDZNUKhsZVrchdENtE65eVznVik/yo4fSw1yidiZAR/SxHfBnrz7pmqnpvJwYh5nwG3KrGf0d3jI+eelEZeKjFQ4n+ltQcFtkdFqK9zGFruJ4Gj21onUtLtmyW5chkWOxjRi2gy+lfIXbVL/gOPO42WOrV15wbQi4bMdS1UYA8tTQB1RD4q+Rn4mJeiEzW7SjobpXuqz/kebsPY/PPwFm37LGCOhpZnBO/RsJQ9Jd+CQuc7ZDwCcGZDP6v6Y9Q+YJ0P4RT5YxR"
  "timestamp": "2015-10-23 12:15:32",
  "paymentTXID": "7gf81011b570aff6604722414663596e7e79fa3aaf243133b379cd0fda89d255"
}
