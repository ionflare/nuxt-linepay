<template>
<v-app id="inspire" >
    <v-toolbar color="green" dark fixed app>
      <v-toolbar-title>My Shop {{userId}}</v-toolbar-title>
    </v-toolbar>
    <v-content >
      <v-container fluid fill-height >
        <v-layout
          justify-center
           
        >
         <v-flex>
               <v-card color="orange">
                  <v-container>
                    <v-layout row wrap  justify-center>
                         <v-flex md10>
                            <v-card color="white">
                                <v-card-text >
                                    Welcome
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex md10>
                            <v-card color="white">
                                 <v-img
                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUVGBcXFRcVFRUWFxUVFxUWFhUXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0gHyUtLS0tLS8vLy0tLS0tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAKYBLwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAgQFBgcAAQj/xABCEAABAwIDBAcFBgQGAQUAAAABAAIDBBESITEFBkFREyJhcYGRoQcyUrHBFEJictHwFSOCkhYzQ7Lh8VMXJHODov/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAvEQACAgEEAgEBBwMFAAAAAAAAAQIRAwQSITFBURNhBRQiMnGhwSOBkVKCseHw/9oADAMBAAIRAxEAPwDLDUBEbOFD9IvRIpbSu4mhO1KEjVCdIVwmKGwbeT7MJSjC2ygW1Tgitril2MO9B6jI5ItBUkOsnGyYRJmUSqpwx6dRpWK5Eo2pJFk1MYJKLEbtTUus5Z8oCdHr2AIMjwvKmRAkaVkuDWdI5CMq9e6wTJz0EjWGfIhGQpTDkhcVjWLMpQjOUV0RtogdA7kikjMkqSQlPAU02fTuT58RCm+yi6CwyEaFWLdiiE7jidoqyy6ltjySNddqMF+LlDSySUaToe7X2YGPI1Crta3CbBWqtc7De2ardVmc0I1QhDzxkppJGpiQBNJmhMmKyPaxFEadRRhOREEbARoYpGkakmIIgNlkEVUOQejJXOdcp9C3JNQCJmiITR7Sp2RqbSQIGpEK4pTXKQnpBZMzBZa7MKhKfRFMoWFPY0rGRBXXXXllyqTPbr1eBcsY9XXXLrLGJ3YM1kfakuYTHYqc7TWCP9nvu1enZ0rnXaw2OhtkmNHNYLddzCyWkiJa09UcFlByujbkuzJYt15nWOSef4RlItcLa27Oh/8AGEj+HQ3/AMsKMsWfw0WjPB6Zih3Amd98eSS32bzcZB5Lb/skI+4vRTQ/ApOGdeUUTwPwzG6X2fSDVzSgVW5UoNwAe5bi2CG2UYRWxRjRgSf1U+WhqxemfPE2xJmXLonWGpAuB3qOlDRwX0lXUrJWOjIADhYmyz/bPsriLSYJjjHB1iD38QqRn7Jyh6MzoZbHRErZM0CppXwSuikGFzTYj6jsSJ33KpXNk7CwDEbKw7N6pDeagNmNu8Kdc3rBF8dGXJYnxAMzzJzVQ2tGASrBUPIYLFV2raTe6XHb4ZnRFNZdEmpcrpcDbuClamHqIt0zFdwWR3Rm10To0V3u2RYERjnLg5LexG+yZXWtLs1WAY3NP48gmEYIcpAO0T2ICc3NKdZOpwMKjXSIp2Y6rPJNI25p5C3Ec03qcnIWrowp0YC5oQJptEl0+S20NkeWBJICVDC92gUtR7Acc3IOSXbMot9EKUm6tB2A1JOwWpfmiP8AFIrN111YX7CCC7YoR+WIPjkB2Ic062sj0GzMKcVuzsS3yRN8ciIoDdbV7KqnFTFnFjiPqsip6HAr37LK7BUOjJyeLjvCpiyLdQs8bo10BJeEVoXjmq7ZFEXLXW+47ySJqy2E4HHFy4d6lHMyQQ1QyF8Y3irCR7pCPFO4m2Gw5orIyUpwsuKdnXGit787ZNNAXN945DvKpns52nO6odie5wOtyTmpP2jUk1TLFTwtLrXLuQ4C5U9uxu5Hs+AySkYrXcfBCC4sE291Gf8Atba0VjSNSzPzy+qpIN1P7yzvqqh83Amzexo0UczZrrK0ZJIlKLbFbD99Tzz1lHbB2a4SZqdn2O8uJCMpqjRgxcDcTTmoSqGZVgpKJzQVFVdKc8kmOf4maeN0QNMevZTc/uqIdTuD7gJ/M92HRPJW0IkyPgbcleubmQnFBCcyUpsRxKnAKZHYOuApGaPJN62Eh1wFz5nEaJJRsysjajJyNGckCWB5Oidw07raJ7oDTPKiXIhMJsgnckDr6JFVTG2iNoFMHSSppVy9ZFigcBomstM++iyXNg5EPcguenBpnW0QRSu5I2amXOko2t0Cf4UOGykGU9xdec5HoKPojXobkepbZMnvRMKIQpAvQ5c5qYWjokZCjanccN0LDQ0kjTjY85hmZIPukX7uKet2c4i9skeDY4++UybTsDp8GybOnD2NcNCAU6wKq7tbTiZG2LFpkLq1RyAr09ykrR5zjtdCHNTdzE+cAgmJSmUgG2ewAXQKo3NwvXOJyGi9+zkgjRc8laotF07IzbO8lLSi7iMXIalZrvJvW+rOG+GPg3n3q1bW9mzJnmQzSFx5m/gAoKr9mEzc45Qe8W9QklF+SkJJdFYY5oThkrU7k3RqIj12m3MZhSOzdjlxDMNy42Hf3rmnNR4OqEW+RlQyjEpOXaOD7t/BW7Zu4ELSHSPLjxa3IX/NqR5Kxw7Bpm2tCw2+IYtPzLphhbXPByTzpS45MndtZultexO4dkSzNsyJzieyw8ScgtbLWjrWaLcbAeq9jqGuF2uBB0IIN1RYEvJN6iT5oyaXcKrAv0bXdgey48yExk3Pq9Ps7/AA+oK2olNTWgOw3DjyGRHE4uCzwx9mWom/CMck3PrGtxfZ327LE/2g3Td27NVa/wBnlzz/AMt36LbxVt+IefkkSVrRxPgCc/DRDZH2H5Z/6TEqLdOrldhbA8Z2u9pY0W1uXKSZ7OawhxLIxh0BeLuyv1bAjzIWrfxOM3GLMa3BFzrYXGfgoZu8zC7Nr24Tn1Dp3HO/cEkp4o/mkUiss/yxMxdunVN1ppfBhPyTql3SlfBJNbD0f3Hgtc4AXcW3HAfIrSv8Rg3LWP1sLjUc7cEqprWSgslZ1HNsdb+nBS+bD4kO45V3Exd9F2IL6PsVuqtm4XubbQmxPFt8im0lApLU+Dq+7WrRVjRdiG6jHJWV9H2ID6JUWoRN6dlZfSDkhGnHJWKSiTZ9CnWZCPAyPjlVl2O0ObclU6MqwbGmAGajkXAcfYPbTAHZKIIU1tR2I6KNEa0XwFx5AtajNYjxwpx0YaLrbjKI/wBg7vmdj3jVugQW07w/CRaxseabbJ3olppMTG3adWnRw7FcYNs0FdYSxujk5gEeTgu7BSX1OPM23wTdBQMETWkDRDl2DE7MZdye0cEZaBHUNdbS5F0UUEgvZ7Tc3Ga8/Lp8yluSZ148uNqmyLbu5GM7leUu0jTziBzi4OF28SpV9JOBk0OPYVWhQ7RNR0xgAAyb1mmwTab5lO3aQub49tKmy8RVzTrl3pT6kHIFR9MyZ3vx2PH3fon0WzRxFvFejKV9HGo0OKUFN9tVksYHRxmQk6DKycx0QGjiPFEmpyB/mW8knIbVgNmzPewGRmA8tU7so97g03dUC3LqoFZvNSxAl0gNuSV5IrtjfHJ9IlCy+RF1W9sUwhla+OwOv0+qjp/aLG5r3RsOFujjbrH8IULs3e7p5LSRONzq3ra3tfLJcWrmpR/CufZ6mi0GocXlr8JcjvI9tv5eLhcZWtzQqveRz8TIcnD3S4XYTxuRmLaKKhdnY6Xzy4KUgoQ0ki2YxNuNR2qP3rNNUmTeDDDloaSuneQ5zhfjdrnjwBNhnoOCG2hc733uccw0k2Nna5DIHt4eSlaeB+eMtz0Av53RRByt4qajPttheSK4SRG0VPgFmMs4aP6SUP52IvYjv7E+exvRkYQW+9l1rnI6c7j0ThsRcOBF+3hpw5ryoa4MdYHENNCfTRXe7byyDkmxk0MI6JsRBNiTpi7TbvK9Gz7ZjEL62c4C97Z9qeRYsIxZHjkPDLn+7I7GngT23Fr5eimobuWM8jjwiObswXBsTzOfrmnH2MDQa2/fNNqvbTI5Xxva7E1uMC3vg3sGkcbg6qHl27O84GgMFi7F/UcsxwaPVFY8Y0HkyPv/ACWdtOOXdwRS24A4doz/AKVXqHeIOOEkObbNxyIOZsLe9wz07VYrF0d2EOvmCdDfu4KsYrwTy45wa3lc21HFiGAuLs8WI3sOGqYtjS3NsSLWPLklNC8yc7d9Hr447YpXY3fShBfSqRaucxBTaDa8kM+lQX0QU0+NC6NMsrNsTMkjCkaRxTeONPIYyvUlI8hII51+1FjhulRxKWptmnonzvOCNgviPE8A3mp23wivC5ZFucGkNHeewLx0mIHhcEprFCX4TiF5cTrX92NvE8rokMD3mMD/AFblo5MZxPfZdUce05nkTLHulsRkkjJZohJFGA0N4F5zvIOWfHVWLeXdf+aJHPEMRvbA2wYA02BsqtPNJQklkxIkAD8I6vMA35Zp9tnf900IiyGWZtr3qqXBJ9kHA1wDiASGankOBPJSuxtph7Ou/C4GwNzmOCqs+0XO6rT72Vhx5DtVjpdzqlzQQxzSQLjtVVl2diqDn0S5qJB7k9/60KTbVS3/AFHH+oJkdxa06W8SEl3s+rjxH9yzzY34/wCQqE15X7Dh281R8b/7gl0+162W5jbM8DUt0Hiu2b7MJ3G884iYNbZuI87DvULU7ffQTugjeXNje5o43ZfIi2Vy0rKEZGeRxdcE9/iZ9MY/tBIc8m7X4i5meRDcrgj5p1tPfRpiYwxHr5tJdwa4gm4vyNlTd4d5v4hE5opnAROaY3taXGMH3gXciM7cFDyVsjXBziSbYQCbgDIAC2gKXbao9PSxx5KbRpW622qeV7YJ4mkuLgyTMXzJAeCBwyuOI4XUrvBs/ZcZIfA2R4F8OK1hzzPoM1kfTyMIeRhOIXyIcDqBztku2dtaR8z3uIfKS4tLg59iAbtA7RYXOllKMElwkdWbSY5ZVJN0/H1LBvDDTkCSDqsbfFCM7WOrSezPNNN0nmR7nMxBjC0uHxZ3ANu4lR1BMTa+Egi1i0Z8gbdl9VbNxtmtYZX5YZHANsdABc9gzdkpZG1Gj08zenwVB8dF1n2e6NwezNuo7jpdSNOLtxBpvy+gvwQ6Grt1LXAsBiz0KdVFU4GwaO8n9Audwx7m4vj0fMuU3xJc+z0Qk8LnPsHd/wAodHTyNFpBnwtbK/am8u0JT9xt+WM2PbfCmE+0aoe6Y/6mu1vzuOCP9NO7CseRquCebTnLs0zKW2Fw4i/NV6krKsXxvjN75hpFhfhmMwO9OYaqo1c5pt8LbZcCcznqjuxr2B4Z+0TYi/EPIL0x/i80nZ9O5wDpD6C7h2jh4JxVUDZGkXc0niHOHpddKxXG0jlc0pU2Z3vNKXz5EObk3GDawbnbrZa3vbLt5R9TWxCYQPx2tclpaWlpF74r5A24Z5Im99LLBI0uwiwP4ri5N/E31z1VV/iGPJ4vcWJIzHIg2yXHkTX4qPe0n2VDPGORT/X/AKJ2rexz2guaGXLbPdh6oHVN22sNQPVTOzNtEuDGFzQL4MLiQANeAy5KniP3ejc2wsLSAa/vipndx/Ryte4Xta1xlbMFvcudzUuFwetn0sI4q7pcIsd+PFKDk42jGQ+xY1mQybp3hNCuWacW0zy4SUophAUprkNKKQLQTChuYlMPFKJusLyjKImJ7CwmwAueACkNibuSzWdbCz4naH8o1KkNp7Shoj0FK3p6w5EnMRX4utofw+dl7Kxykzy3kUUOtm7JhhAkrJGMvm2NzgCe8ce5VPfneSapk6KOMiBnutAPWPxHDl3Kb2PuXLK/p6h3SyuzL5CcI7AOPcLBXSi3cjb7z3P7BZrfJq6IKMOjmm5T7MWodlVcptHC4Xy4j9hXRu6clHTmolfd9rAXyaOV1oVdUQUkTpX2YxvZm48Gt4lx5KmGjn2hIJqhrhGM4KZpsGjg+U/Ef+k7yPyKoLwRdVtxskWGWncQcgW/TJVWOgle6zIn2vkXDCLdpK1+j3XlNsb2xM+GJrb/ANxF1YKHYsEZuGYnfE+7neZ08E7yyYuxIoW4O5TmvbPMLlpuLjIHsvr3rU2hCLuS8DjxCEYvtmbT6HAK9uhNK9uq9ExbrEWOYOqr+0dyqGd2N8Ixc2uc0+hU7ddiQ3BorFZuo6CndFs94gLrl2Lr4ri3vPvYrINo7oV0ZwugcbaOZZ2fgVu+1tkw1LcMrbgaWc5pHkVWqj2aUbvddKw8w8H/AHAqbbXSPS0mXHH882v9t/vf8GV0+7ddVPPUOMN96Qhgy0Gajp92KyA2fC7M6sIcDzsWkrbWbNhoAGitbE37rZmwnO3WsTZxvmdeKqO09+niUtZWxNY02GCJtj25k6oJs6ZZ3KW6HMV12v4KhS0kxLWfZpXf/W7TgLkc1qeztjtjiiDcnHFixW962eQ4Ai3koal38my/9xG4W16G5v2FpUhu/vE52Jtw5xLes4EHXM+JKnPYvzdB1GqzZYKKVV9e/wBiYoojiII0A1GZv2D5KTERab52+vLLgkUMJcS86n5cgiki5Avc65HQc1xKCTv68HDObbPXQB1su7n3X4aIbqTPPx7u3tTgNFzck352PZkknX9+io0vJNSa6GwobA215cE8pKYEg6Dik8bZhHojmR5J8UIuaBknLayRcMsvBAEh4ixtovRJnqmtTK4m7RplnxXpeTiK3vnsF1Q28eTxzJse8LMtp7u1cBzixjUlmY7QdDbwWwzbRe3VgI7Cm0u0oyMwQe0JZwg+zu02sz4VUejJaOOUWJgeQbC5BBJ8StCh3PkkgjdiET7ZsIJ//QOXkpf7LHI5rmkGw0HHT9FPU8vxGxXE8OJyO7L9qaiUVXDE7JoBFC2N3WIGZdn4C/BGfs6J2sbfIIgmHAr0PXSowqqPHc5uTlfIxk2DAfu27iU1k3ajOj3DyKnLrrpZaXC+4oaOpyrqTKzJuw77sg8R/wApu7YEw0wnxt81bSV4oS+z8L8V/cvHX5l27/sYjtbe+WqeabZ4Ibo+e1stLRDgPxa8hxVi3U3Ujpm3IxSHNxOZuczc8SlbubDZTMDWDPie1T8bDxKMp7uI9GUa5Y4YgbX2rFSxGaZwa0aDi48GsHFx5KL3l3kgoY8Uhu8jqRtPWd2/hb+I+pyWe7Gin2vV9NOf5TD1Wi4Y0ZdVo7bC51PkA8Y0rYkpW6RZ9jUs205hV1AwwsP8iLg0fG74nHn9NdBgiawWaLD96oNJA1jQ1uQCdNQu2GqFgLppmsaXONgEpq58YcLEAjkU6QjZWtobyOvaJuH8R18kw/xHUjRzT2OaPpZWKo2BE7QlvqPIrOfaVUfZGCBj2uml+G92R6YiOBJuB3HkmTaNSZIf+qL+n6EQslDf8x7XOYGnk3J1/RT9N7QKY++yRnbYOHob+ixfZ7RCy33jmf0SZ9ok5Ku5Jci7D6Ao96aKUgMqY7nQOOE+TrFS7XA6OBXzZROB94Xvz5KYpa6SO3Rzys7A8lo7muuB5LRprkDTXRvTgeQKTe3AhZDRb4VzLfzWSD8bLHzaQPRTNL7Rph/mQA/keHejg35rOC9hTfo0OTC7JwDhycAfmqdvTuTBKTNHBGXW6zcLRiy1GWqXB7RYCP5jHs/NGT6sxD1UpSb3UUmQlZfliaD/AGk39ErxN9MeOVxM6rNkNY3KjIIsMOHowbcyRa/amezJJY5MQgbA2/WcXhwsBcXaDc3Nh43W0Mq4jo/zSX7PgfrHE7va0/RTlil5Lfek1VFa3d3pZKMPEEAEHqknLXh4qxSXIsHZ5Zixvnn9V5Fu9TNvhgY3F72EYb99kVmx4gA0B1hoMb7C/iueWCXgV5YN2BDgO489b3XdMLXJA7zw7U6Gy4r3wX7y4+l0T+HQ/wDjbw4DgssGT6C/LD6kYatvxC9uH/KNsqqa9z2X6zQ0kdhS9o1bY2u6OIGRo6owgAngqpu1vRLLW9FOXMJa7CxzCy7sjllnkCmxw2ZFbspt345NKv8A36F3l6uY46ry4OaIRdBexehwjz+wdhyukSRROycweSW6HkV41h4pJcjx4D0scbBha0AIz42nUA96YOjd4pGJ4OY8ipSpIoouT7HbqVo0Fu79EWNoHG6EyU969qqkNjc+18LS4juF0sa8Gak+Cvb4bMrpHNlpKhzQAAYgQBlc4hzPYU52HWzOjwtnZPKwddsjDE8O5HDoO3CUPZksVTGZaGcxni33mtcc7Phdp4WUHtrYG1ZHteJYHOb7rmDonj007LoNtPcrPTxxU4rBlcYbfap/o+Of8lfqHV7as/aX1jGlxzhLntAOmG3VLRlwV4i2ZtEWLa9rm2y6Snbit22IzU1sYz9C37QGiX72A5HtT1GMPNsXVfaDm1FQiq44Saf1Vr+SnxKob0+0SOAGOmIkk0L9WMPZ8bvTv0UfvRT1tUwFkjOgdj/lQyAOwtNv5oIvmCMtM1T6Xdl7zk0tztd7rD5Z+CEcW1XI4ZT3cRGlLHNX1FiXPc83c5xuT2u/TuAW77t7IbSxNjaOGffxUDuNus2lZiIu93EjM+HAK4RhTyT3ul0PCO1W+xwxGahNCK0oxQGwgKWChpvX1rYY3PdoB4k8k7aXLFSvoHt3bLadlzm92UbPiPM8mjifrZZvWy4nOc+z3uN3Ei9z3csgLcLBJ2ntJ0khlebudoODWjRoTQzg/QArzsmR5XfhHp4cSxr6jebZsTrksHhcZnTRNJd2mfdc4Ea3s4XPkpprRfIiw17SeASwwjT9lJ8uRdMr8UJdorUu7ko91zTwGrT+nqm7qKdv+m4js63yVucSB26D6lesOQHyVI6zJEnLR430U77UW5OBHeCEtlarlI0OycAR25/NNzsuB3vRN8Or28FZfaHtEnoH4ZXW1uSKZ2HIgHvAKmandqE+6Xt8bgeaaTbqPHuSA/mBHqLqkddifZKWjyL6jWnLWe4XM/8Aje5n+0qTpttVDfdqH9zwx/HmRi07VFSbCqW/cxflIPomsjZWe8xze9pCvHPB9MhLBJdoudNvnVN16N/cXMPqXD0UvTe0Bw9+J/aWljx82n0WZiqIRBXFVWR+ybxo12m39pz7zg384cz1It6qXpN44JM2uB/K5rv9pWI/bvkvenYSCWjIZc025ehNhvJroX6kf1CyFJQxPsWkZZjQ2PZyWK020ntthlkb3PJH9pNlIU281Q0DrtdzxMAPmyyNQYFuXRrgjnboWP5Zlp+RSTUSgdaF3hhd8is4g33lbqy9vgkPycD81J0ntCb97G38zAR5tJRpPpi17RdY6m4zBHeCPmvHzAZ/VQNPv1C7WSPxdhPk6ykot4IXj3Qe7C4eizxyrgKaQ7NW0auTGs2xTN9+pib3yNH1RTNRvPWjjv8AiYP0R6aCkGbI4R3MYPooSxTfZaM4LnkgX73Qh4ZC2WoceMbTgb3vOXldT+x3SyNJmY1oNxhzNweBvqpBjm8LeFkvpEkcVO2zTyJqkgdJRRRAiONjAdcLQ2/kjEoZlSOlVrSJNNu2GJSLpBkScaDYVEpX8Lpr3Mcd+5O6WiiabsZGDzDQD5rK2bcd8b/7insG8jx98+IC53OL9nQscvZqzUtqzFm9r/iHknLN8niwuPX9Vt0DfHP6GltSsXas8/xjIdC31SJN4pnDMtvzBcPqjvggfFNmg1NY1gLidFQN4dv9MT8I0H71UTU100hvJKS21sIyaRrnzUZNNcrkzz3ul0deDHs5fYp81zdEpyNToPU9ibY80YSW7bepUqLpj1rrHna5Pa48kVstuP8A3zTISD980tx5H/tK0OmPY5eN8tAiMlzuUyY6wsiZpGOmP+kBtmjRtudf3qVGxOz/AH4p5A7ipSKJj4NuUYNJPYo2CXVO45eCRoaxwQEZnHkm7ZeaJG6/FLXoNnk2z4Xg4omOP5QDqouTdeBxNg5uRzB7eRU23v4ro22v4qkMk49MnOEH2ip1G6BuMEuo0c36hR8+7FS3QNd+V30KvQOnNJvcX7VeOryr6kHpcbM5noZ2e9G8f0n6Jt9oI81qDT80GSmY/FjY12Y1aCrx+0JeUSloV4Zmxqzcrm1mv74K81m7lO4j+Xh/KSFFS7nR3s2Rw7wCrx1+N9kJaGa65K8Kq4SWygEEZG1ssvUKQl3SlA6r2nO3EJjUbBqWC5jJHNpBXRHU4n0yMtNkXaHVPteZtw2aQd7i70ddO4t6Kgffa78zB822VamY9h6zXDvBQnTldCy+mc7x12i80++0oGbPFshHoQU/p/aJbXpW94a4ehWcioSTOqLIxdhqg9pzAM3A97HD6LxntfpwbPjf3tBIWTvlTKZJKS9IMUb7Re0qgkt/MwH8QIU/SbeppBdkzD/UF8ulKilcNCR3EhS49FETgySg9eLlyHShd0pvNcuQYwYORo5DwK5clYyDOqHAZlCDuK5ckYyDRO1KWHei5ckZRC2fJEac+5eLkg6D4s7IrHLlyRoZBYQnZ0XLlKRVHsTUVhXLkgUFBRoSuXIMZDljsro4fquXJUBnmLMZcENmY8Vy5UAKw5FcR6rly1GPJPu9ybOOYPauXIUMJOru9Jdm0rlyUYaVBxNaSPNAqtnwvFzG3PsA+S5cqptdE2k+yMn3cgIuGlvcVG1m6oHuyHxC5crR1GRPsjLBja6Ier2K9gviafP9FEystquXL0cWSUuzzsuOMegRauAXLlcif//Z"
                                    height="200px"
                                    contain
                                ></v-img>
                            </v-card>
                        </v-flex>
                         <v-flex md10>
                            <v-card color="white">
                                
                                <v-card-text>
                                    <v-layout>
                                        <v-flex md3>Type </v-flex>
                                        <v-flex md2>Price </v-flex>
                                        <v-flex md2>Amount </v-flex>
                                        <v-flex md3>total </v-flex>
                                        <v-flex md2>Action </v-flex>
                                         
                                    </v-layout>
                                    <v-divider> </v-divider>
                                    <v-layout  v-for="(item,idx) in myMenu" :key="idx">
                                        <v-flex md3>{{item.name}}  </v-flex>
                                        <v-flex md2>{{item.price}}  </v-flex>
                                        <v-flex md2> {{item.amount}}</v-flex>
                                        <v-flex md2>{{item.totalPrice}} </v-flex>
                                         <v-flex md3>
                                             <v-btn color="green" @click="adaptWishList(item,true)">+</v-btn>
                                             <v-btn color="red"  @click="adaptWishList(item,false)">-</v-btn>
                                             
                                         </v-flex>
                                        
                                    </v-layout>
                                    <v-divider> </v-divider>
                                    <v-layout>
                                        <v-flex md3>
                                            Summary
                                            </v-flex>
                                        <v-flex md2></v-flex>
                                        <v-flex md2>{{sumAmount}}</v-flex>
                                        <v-flex md2>{{sumPrice}}</v-flex>
                                        <v-flex md3></v-flex>
                                    </v-layout>
                                     <v-divider> </v-divider>
                                     <v-layout  justify-center  align-center>
                                        <v-flex md3>
                                            <v-btn color="green" @click="submit()">Line PAY</v-btn>
                                             <v-btn color="red" @click="reset()">Reset</v-btn>
                                             <v-btn color="blue"  @click="testGetTime()">Gettime</v-btn>
                                        </v-flex>
                                        
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         <v-flex md10>
                            <v-card color="white">
                                <v-card-text>
                                    
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    
                 </v-container>
              </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="green" app inset>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default{
    mounted() {
    // LIFFの初期化
    
    liff.init(function(data) {
      console.log(data)
    })
    
    },



    data(){
     return  {
            userId: '',
            displayName: '',
            pictureUrl: 'https://bulma.io/images/placeholders/128x128.png',
            statusMessage: '',
            myMenu : [
                { name : "Cappuccino", abbreviation : "CA", price : 60 , amount : 0, totalPrice: 0},
                { name : "Latte", abbreviation : "LA", price : 70 , amount : 0 , totalPrice: 0},
                { name : "Expresso", abbreviation : "EX", price : 80 , amount : 0, totalPrice: 0},
                { name : "Americano", abbreviation : "AM", price : 100 , amount : 0, totalPrice: 0},]

        } 
           
        
    },
    computed:{


        liffGetUserInfo: function(){
            liff.getProfile().then((profile) => {
            this.userId = profile.userId
            this.displayName = profile.displayName
            this.pictureUrl = profile.pictureUrl
            this.statusMessage = profile.statusMessage
            }).catch(function (error) {
                alert("Error getting profile: " + error);
            });
        },


        sumAmount: function(){
            let sumAmount = 0;
            this.myMenu.forEach(element => {
                sumAmount += element.amount;
            });
            return sumAmount;
        },
        sumPrice: function(){
            let sumPrice = 0;
            this.myMenu.forEach(element => {
                sumPrice += (element.amount * element.price);
            });
            return sumPrice;
        },
         
    },
    methods:{

        

        async submit(){
            
            let data={};
            data.myMenu = this.myMenu;
            data.productImageUrl='https://reflectionsipc.files.wordpress.com/2017/07/aaeaaqaaaaaaaaxlaaaajdc5y2u4zddilwi3mjytndixos1intjklwi2mgu5zwvhm2ring1.jpg';
            let reqReserve = await this.$axios.$post('/api/reservePayment', {data});
            if(reqReserve.returnMessage == "Success.")
            {
                  location.href = reqReserve.info.paymentUrl.web;
            }else{
                //alert("An Error occurred while calling LinePay_researvePayment API!!!");
                alert(reqReserve.returnMessage);
            }
          
           
         
        },
        reset(){
            
            this.myMenu = [
                { name : "Cappuccino", abbreviation : "CA", price : 60 , amount : 0, totalPrice: 0},
                { name : "Latte", abbreviation : "LA", price : 70 , amount : 0 , totalPrice: 0},
                { name : "Expresso", abbreviation : "EX", price : 80 , amount : 0, totalPrice: 0},
                { name : "Americano", abbreviation : "AM", price : 100 , amount : 0, totalPrice: 0},];
                
           
        },
        adaptWishList(item,isAdd){
            if(isAdd == true)
            { item.amount++; }
            else
             { if(item.amount >0)
                {item.amount--; }
             }
            item.totalPrice = item.amount*item.price;
        },
        testGetTime(){
             location.href = '/api/getTime';
        }

        

    },
    

}
</script>
