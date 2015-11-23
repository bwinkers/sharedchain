$(function() {
    $('.error').hide();
    $(".button").click(function() {
        // validate and process form here

        $('.error').hide();
        var password = $("input#password").val();
        if (password == "") {
            $("label#password_error").show();
            $("input#password").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "") {
            $("label#email_error").show();
            $("input#email").focus();
            return false;
        }

        alert(password);

        var F = kbpgp["const"].openpgp;

        var opts = {
            userid: email,
            ecc:    true,
            ecc:    true,
            primary: {
                nbits: 384,
                flags: F.certify_keys | F.sign_data | F.auth | F.encrypt_comm | F.encrypt_storage,
                expire_in: 0  // never expire
            },
            subkeys: [
                {
                    nbits: 256,
                    flags: F.sign_data,
                    expire_in: 86400 * 365 * 8 // 8 years
                }, {
                    nbits: 256,
                    flags: F.encrypt_comm | F.encrypt_storage,
                    expire_in: 86400 * 365 * 8
                }
            ]
        };

        kbpgp.KeyManager.generate(opts, function(err, alice) {
            if (!err) {
                // sign alice's subkeys
                alice.sign({}, function(err) {
                    console.log(alice);
                    // export demo; dump the private with a passphrase
                    alice.export_pgp_private ({
                        passphrase: password
                    }, function(err, pgp_private) {
                        console.log("private key: ", pgp_private);
                    });
                    alice.export_pgp_public({}, function(err, pgp_public) {
                        console.log("public key: ", pgp_public);
                    });
                });
            }
        });


        var dataString = 'name='+ password + '&email=' + email;
        //alert (dataString);return false;
        $.ajax({
            type: "POST",
            url: "/test",
            data: dataString,
            success: function() {
                $('#chainlink_form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Submitted!</h2>")
                    .append("<p>We will be in touch soon.</p>")
                    .hide();
            },
            error: function(err) {
                $('#chainlink_form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Error!</h2>")
                    .append("<p>Doh!</p>")
                    .append(err)
                    .hide();
            }
        });
        return false;


    });
});
