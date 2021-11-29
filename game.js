function reply_click(cid) {
    if (cislo3 == 1) {
        console.log(cid);
        roh1 = 1;
        roh2 = 3;
        roh3 = 7;
        roh4 = 9;
        if (cid == roh1 || cid == roh2 || cid == roh3 || cid == roh4) {
            if (cid == roh1) {
                if (batny[0].style.backgroundColor == 'green') {
                    batny[0].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[0].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[1].style.backgroundColor == 'green') {
                    batny[1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[3].style.backgroundColor == 'green') {
                    batny[3].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[3].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh2) {
                if (batny[2].style.backgroundColor == 'green') {
                    batny[2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[5].style.backgroundColor == 'green') {
                    batny[5].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[5].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[1].style.backgroundColor == 'green') {
                    batny[1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[1].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh3) {
                if (batny[6].style.backgroundColor == 'green') {
                    batny[6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[3].style.backgroundColor == 'green') {
                    batny[3].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[3].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[7].style.backgroundColor == 'green') {
                    batny[7].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[7].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh4) {
                if (batny[7].style.backgroundColor == 'green') {
                    batny[7].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[7].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[5].style.backgroundColor == 'green') {
                    batny[5].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[5].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[8].style.backgroundColor == 'green') {
                    batny[8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[8].style.backgroundColor = 'green';
                    devet++;
                }
            }
        } else if (Number(cid) > roh1 && Number(cid) < roh2) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) + 2].style.backgroundColor == 'green') {
                batny[Number(cid) + 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) + 2].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh3 && Number(cid) < roh4) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 4].style.backgroundColor == 'green') {
                batny[Number(cid) - 4].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 4].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh2 && Number(cid) < roh3) {
            if (Number(cid) == 6) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == 'green') {
                    batny[Number(cid) - 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 2].style.backgroundColor == 'green') {
                    batny[Number(cid) + 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (Number(cid) == 4) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == 'green') {
                    batny[Number(cid) - 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 2].style.backgroundColor == 'green') {
                    batny[Number(cid) + 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = 'green';
                    devet++;
                }
            } else {
                if (batny[Number(cid) + 2].style.backgroundColor == 'green') {
                    batny[Number(cid) + 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == 'green') {
                    batny[Number(cid) - 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
            }
        }
        if (devet == roh4) {
            reset();
        }
    }
    if (cislo5 == 1) {
        console.log(cid);
        roh1 = 1;
        roh2 = 5;
        roh3 = 21;
        roh4 = 25;
        if (cid == roh1 || cid == roh2 || cid == roh3 || cid == roh4) {
            if (cid == roh1) {
                if (batny[0].style.backgroundColor == 'green') {
                    batny[0].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[0].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[1].style.backgroundColor == 'green') {
                    batny[1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[5].style.backgroundColor == 'green') {
                    batny[5].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[5].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh2) {
                if (batny[4].style.backgroundColor == 'green') {
                    batny[4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[9].style.backgroundColor == 'green') {
                    batny[9].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[9].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[3].style.backgroundColor == 'green') {
                    batny[3].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[3].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh3) {
                if (batny[20].style.backgroundColor == 'green') {
                    batny[20].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[20].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[21].style.backgroundColor == 'green') {
                    batny[21].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[21].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[15].style.backgroundColor == 'green') {
                    batny[15].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[15].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh4) {
                if (batny[24].style.backgroundColor == 'green') {
                    batny[24].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[24].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[23].style.backgroundColor == 'green') {
                    batny[23].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[23].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[19].style.backgroundColor == 'green') {
                    batny[19].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[19].style.backgroundColor = 'green';
                    devet++;
                }
            }
        } else if (Number(cid) > roh1 && Number(cid) < roh2) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) + 4].style.backgroundColor == 'green') {
                batny[Number(cid) + 4].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) + 4].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh3 && Number(cid) < roh4) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 6].style.backgroundColor == 'green') {
                batny[Number(cid) - 6].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 6].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh2 && Number(cid) < roh3) {
            if (Number(cid) == 10 || Number(cid) == 15 || Number(cid) == 20) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 6].style.backgroundColor == 'green') {
                    batny[Number(cid) - 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 4].style.backgroundColor == 'green') {
                    batny[Number(cid) + 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 4].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (Number(cid) == 6 || Number(cid) == 11 || Number(cid) == 16) {
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 4].style.backgroundColor == 'green') {
                    batny[Number(cid) + 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 6].style.backgroundColor == 'green') {
                    batny[Number(cid) - 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
            } else {
                if (batny[Number(cid) + 4].style.backgroundColor == 'green') {
                    batny[Number(cid) + 4].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 4].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 6].style.backgroundColor == 'green') {
                    batny[Number(cid) - 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
            }
        }
        if (devet == roh4) {
            reset();
        }
    }
    if (cislo7 == 1) {
        console.log(cid);
        roh1 = 1;
        roh2 = 7;
        roh3 = 43;
        roh4 = 49;
        if (cid == roh1 || cid == roh2 || cid == roh3 || cid == roh4) {
            if (cid == roh1) {
                if (batny[0].style.backgroundColor == 'green') {
                    batny[0].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[0].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[1].style.backgroundColor == 'green') {
                    batny[1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[7].style.backgroundColor == 'green') {
                    batny[7].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[7].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh2) {
                if (batny[6].style.backgroundColor == 'green') {
                    batny[6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[5].style.backgroundColor == 'green') {
                    batny[5].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[5].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[13].style.backgroundColor == 'green') {
                    batny[13].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[13].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh3) {
                if (batny[42].style.backgroundColor == 'green') {
                    batny[42].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[42].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[35].style.backgroundColor == 'green') {
                    batny[35].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[35].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[43].style.backgroundColor == 'green') {
                    batny[43].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[43].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh4) {
                if (batny[48].style.backgroundColor == 'green') {
                    batny[48].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[48].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[47].style.backgroundColor == 'green') {
                    batny[47].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[47].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[41].style.backgroundColor == 'green') {
                    batny[41].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[41].style.backgroundColor = 'green';
                    devet++;
                }
            }
        } else if (Number(cid) > roh1 && Number(cid) < roh2) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) + 6].style.backgroundColor == 'green') {
                batny[Number(cid) + 6].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) + 6].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh3 && Number(cid) < roh4) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 8].style.backgroundColor == 'green') {
                batny[Number(cid) - 8].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 8].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh2 && Number(cid) < roh3) {
            if (Number(cid) == 14 || Number(cid) == 21 || Number(cid) == 28 || Number(cid) == 35 || Number(cid) == 42) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 8].style.backgroundColor == 'green') {
                    batny[Number(cid) - 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 8].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 6].style.backgroundColor == 'green') {
                    batny[Number(cid) + 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 6].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (Number(cid) == 8 || Number(cid) == 15 || Number(cid) == 22 || Number(cid) == 29 || Number(cid) == 36) {
                if (batny[Number(cid) + 6].style.backgroundColor == 'green') {
                    batny[Number(cid) + 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 8].style.backgroundColor == 'green') {
                    batny[Number(cid) - 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 8].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
            } else {
                if (batny[Number(cid) + 6].style.backgroundColor == 'green') {
                    batny[Number(cid) + 6].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 6].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 8].style.backgroundColor == 'green') {
                    batny[Number(cid) - 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 8].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
            }
        }
        if (devet == roh4) {
            reset();
        }
    }
    if (cislo9 == 1) {
        console.log(cid);
        roh1 = 1;
        roh2 = 9;
        roh3 = 73;
        roh4 = 81;
        if (cid == roh1 || cid == roh2 || cid == roh3 || cid == roh4) {
            if (cid == roh1) {
                if (batny[0].style.backgroundColor == 'green') {
                    batny[0].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[0].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[1].style.backgroundColor == 'green') {
                    batny[1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[9].style.backgroundColor == 'green') {
                    batny[9].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[9].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh2) {
                if (batny[8].style.backgroundColor == 'green') {
                    batny[8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[8].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[7].style.backgroundColor == 'green') {
                    batny[7].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[7].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[17].style.backgroundColor == 'green') {
                    batny[17].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[17].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh3) {
                if (batny[72].style.backgroundColor == 'green') {
                    batny[72].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[72].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[73].style.backgroundColor == 'green') {
                    batny[73].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[73].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[63].style.backgroundColor == 'green') {
                    batny[63].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[63].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (cid == roh4) {
                if (batny[80].style.backgroundColor == 'green') {
                    batny[80].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[80].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[79].style.backgroundColor == 'green') {
                    batny[79].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[79].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[71].style.backgroundColor == 'green') {
                    batny[71].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[71].style.backgroundColor = 'green';
                    devet++;
                }
            }
        } else if (Number(cid) > roh1 && Number(cid) < roh2) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) + 8].style.backgroundColor == 'green') {
                batny[Number(cid) + 8].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) + 8].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh3 && Number(cid) < roh4) {
            if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                batny[Number(cid) - 1].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == 'green') {
                batny[Number(cid)].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 10].style.backgroundColor == 'green') {
                batny[Number(cid) - 10].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 10].style.backgroundColor = 'green';
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                batny[Number(cid) - 2].style.backgroundColor = 'red';
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = 'green';
                devet++;
            }
        } else if (Number(cid) > roh2 && Number(cid) < roh3) {
            if (Number(cid) == 18 || Number(cid) == 27 || Number(cid) == 36 || Number(cid) == 45 || Number(cid) == 54 || Number(cid) == 63 || Number(cid) == 72) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 10].style.backgroundColor == 'green') {
                    batny[Number(cid) - 10].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 10].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 8].style.backgroundColor == 'green') {
                    batny[Number(cid) + 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 8].style.backgroundColor = 'green';
                    devet++;
                }
            } else if (Number(cid) == 10 || Number(cid) == 19 || Number(cid) == 28 || Number(cid) == 37 || Number(cid) == 46 || Number(cid) == 55 || Number(cid) == 64) {
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 10].style.backgroundColor == 'green') {
                    batny[Number(cid) - 10].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 10].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) + 8].style.backgroundColor == 'green') {
                    batny[Number(cid) + 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 8].style.backgroundColor = 'green';
                    devet++;
                }
            } else {
                if (batny[Number(cid) + 8].style.backgroundColor == 'green') {
                    batny[Number(cid) + 8].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) + 8].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 10].style.backgroundColor == 'green') {
                    batny[Number(cid) - 10].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 10].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == 'green') {
                    batny[Number(cid) - 1].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == 'green') {
                    batny[Number(cid) - 2].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = 'green';
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == 'green') {
                    batny[Number(cid)].style.backgroundColor = 'red';
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = 'green';
                    devet++;
                }
            }
        }
        if (devet == roh4) {
            reset();
        }
    }
}

function reset() {
    prostor.innerHTML = `Vyhrál jsi!`;
}