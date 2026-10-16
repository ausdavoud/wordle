// Wordle clone — plain JS
// 100 elementary CS-related 5-letter words (lowercase)
const WORDS = [
  "achievement", "aircraft", "appropriate", "arithmetic", "bored", "capable", 
  "carry out", "certain", "circuits", "claim", "communicating", "consider", 
  "demagnetize", "dessert", "determine", "diet", "display screen", "dull", 
  "executive", "fans", "fraction", "instantaneously", "intricate", "invest", 
  "logical", "manipulating", "mathematical", "means", "medical", "medium", 
  "namely", "navigation", "operate", "operation", "order", "originality", 
  "patient's", "perform", "personality", "possible states", "power", "printer", 
  "remarkable", "replace", "resilience", "supply", "unfortunately", "arbitrary", 
  "astounding", "astute", "baffle", "petition", "relinquish", "resilient", 
  "tempt", "abroad", "acts", "actual", "architecture", "aspect", "candidate", 
  "centerpiece", "characteristics", "clothing", "coast", "components", "course", 
  "creative", "cut", "enormous", "equipment", "execution", "extremely", "figure", 
  "fundamental", "garment", "handling", "infinite", "intense", "internal", 
  "known limit", "laziness", "made up of", "makeup", "mice", "more compact", 
  "multicultural", "own", "peripheral", "portable", "regardless of", "announce", 
  "application", "assignment", "blended", "closely", "coordinate", "deer", 
  "direct", "Indecision", "Integrate", "originally", "recognize", "rewarding", 
  "stage", "supplier", "the former", "tiring", "trip", "various", "acclaim", 
  "advent", "adverse", "agile", "albeit", "autonomous", "disruptive", "haphazardly", 
  "reliability", "respond", "rules", "schematically", "sequence", "sewing", 
  "storage", "versatility", "thereby", "vacation", "voters", "wings", "alter", 
  "anticipate", "appealing", "celebrated", "conform", "contemporary", "frail", 
  "vital", "admitted", "appliance", "attend", "balance", "blockage", "by so doing", 
  "connectivity", "continual", "crab", "critical", "currently", "customer", 
  "declined", "diagnosis", "disabled", "due to", "efficiency", "endure", 
  "enhance", "expand", "expert", "flooded", "generate", "hand held", "harvest", 
  "historian", "impact", "incompatible", "individual", "interaction", 
  "interactive", "investor", "licenses", "losses", "meet", "opportunity", 
  "orchard", "oven", "pinpoint", "pipes", "prescribe", "presented", "productivity", 
  "proliferating", "proper", "ranging", "record", "remote", "sale", "scientific", 
  "shell", "significantly", "smart", "so that", "sophisticated", "staff", 
  "stock", "suggest", "super highway", "supervision", "take over", "thinker", 
  "tine", "to ensuring", "touch", "transformed", "ultimately", "valley", 
  "vast database", "alarm", "artifical", "beneficial", "blow", "bottlenecks", 
  "clustering", "clusters", "compares", "competitive edge", "competitors", 
  "conflict", "corn", "criticism", "data mining", "decision trees", "deductive", 
  "directions", "duplicate", "emerging", "erroneous", "examine", "favorable", 
  "fiat", "for instance", "found", "fraudulent", "frend", "goes over", "hit", 
  "indicate", "instructor", "insurance", "intelligence", "ivy", "labeled", 
  "legislation", "bear", "block", "blur", "brilliant", "intrigue", "shed", 
  "unique", "adhered", "allocation", "approached", "attendance", "based on", 
  "clone", "commercial", "comprehension", "contest", "convenience", 
  "conventional", "courses", "dedicated", "distributed", "distribution", 
  "editor", "excluded", "faculty", "fix bugs", "foundation", "free beer", 
  "fulfilling", "heavily", "hitherto", "ideal", "implement", "industry", 
  "interface", "interpreter", "kit", "lawyers", "licensed", "mature", "modify", 
  "operating system", "likely to be", "meal", "meaningful", "neural", 
  "news wires", "passage", "patterns", "pulling stories", "raw", "reasoning", 
  "refining", "relevant", "scrapping", "simply", "subsets", "supreme Court", 
  "trigger", "uniform", "warehouses", "zoology", "creep", "crush", "distort", 
  "diverse", "prosperous", "reveal", "agent", "automating", "base", "benefit", 
  "break-through", "broadening", "conducted", "convergence", "cottage", 
  "cramped", "desert", "dormitory", "dramatic", "drive", "ease", "emphasis", 
  "eruption", "eventually", "fingertips", "gestures", "handwriting", "heard", 
  "hyperlinked", "inaugural", "incorporate", "indeed", "innovations", "inspired", 
  "institute", "interacting", "introduction", "intuitive", "led", "liberates", 
  "out there", "position", "predictable", "principles", "product", "purposefully", 
  "released", "resellers", "revenue", "rolled", "robust", "roots", "sandpaper", 
  "set out", "shortcoming", "teaching aid", "texture", "typesetting", 
  "undergraduate", "universe", "utilities", "utterly", "volunteers", "wonder", 
  "wool", "clarify", "coarse", "commonplace", "complex", "convenient", 
  "exclusively", "immense", "rigid", "sufficiently", "lit", "mainstream", 
  "multimodal", "onslaught", "palm", "pioneering", "poised to shake up", 
  "seniors", "sight", "skyline", "skyscraper", "sprung up", "tendency", "toss", 
  "traditional", "treat", "up to now", "vision", "volcano", "xerox", "accurate", 
  "dim", "dominant", "dormant", "drab", "gigantic", "lasting", "selective", 
  "vibrant", "Accounting", "Afford", "Approach", "Attractive option", 
  "Band width", "Battling", "Bursting point", "Barrier", "Camping", "Coastline", 
  "Complexities", "Confident", "Cope", "Corporation", "Costly", "Deal", 
  "Defense", "Delivery", "Enterprise", "Established", "expect", "Flammable", 
  "Focus", "Generic", "Hairs", "Havoc", "Headdress", "Hurricane", "Indicated", 
  "Instead", "Investing", "Latest version", "Leased", "Leaves", "Mere", 
  "Outsourcing", "Out growing", "Packed", "Particularly", "Payroll", 
  "Permanent", "Pitfalls", "Profits", "Prohibitively", "Rare", "Reliable", 
  "Requirements", "Rent", "Secure", "Speechless", "Sudden", "Suite", "Tied to", 
  "Up grading", "Via", "Vigor", "amenity", "elaborate", "hazardous", "minuscule", 
  "prime", "rudimentary", "vigorous", "senate", "Session", "Stream", "Structures", 
  "Summit", "Talent", "Transmission", "Unstable", "Wedding", "Within", "Acting", 
  "Aggressive", "Attorney", "Besides", "Buffers", "Burgeoning", "Circus", 
  "Coding", "Conceptually", "Contact", "Courtroom", "Criminal", "Datagram", 
  "Described", "Enshrined", "Establish", "Evidence", "Exchange", "Gateway", 
  "Heart", "Integral", "Legislation", "Mediocre", "Modules", "Node", "Package", 
  "Path", "Portion", "Promise", "Propose", "Reacted", "Resolution", "Route", 
  "ample", "arid", "burgeon", "conspicuously", "defy", "dignitary", "elude", 
  "enact", "erratic", "exaggerate", "exhaust", "facet", "feign", "indiscriminate"
];

// Keep only plain five-letter words (a-z), lowercased
const DICTIONARY = WORDS.map(w => w.toLowerCase()).filter(w => /^[a-z]{5}$/.test(w));

const ROWS = 6, COLS = 5;
let secret = '';
let board = Array.from({length:ROWS}, () => Array(COLS).fill(''));
let curRow = 0, curCol = 0;
let gameOver = false;
const boardEl = document.getElementById('board');
const keyboardEl = document.getElementById('keyboard');
const messageEl = document.getElementById('message');

function init(){
  seedSecret();
  renderBoard();
  renderKeyboard();
  messageEl.textContent = '';
  gameOver = false;
}

function seedSecret(){
  secret = DICTIONARY[Math.floor(Math.random()*DICTIONARY.length)];
  // for dev: console.log('secret', secret);
}

function renderBoard(){
  boardEl.innerHTML = '';
  for(let r=0;r<ROWS;r++){
    const row = document.createElement('div');
    row.className = 'row';
    for(let c=0;c<COLS;c++){
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.row = r; tile.dataset.col = c;
      tile.textContent = board[r][c] || '';
      row.appendChild(tile);
    }
    boardEl.appendChild(row);
  }
}

function renderKeyboard(){
  keyboardEl.innerHTML = '';
  const rows = ["qwertyuiop","asdfghjkl","zxcvbnm"];
  rows.forEach((keys, idx)=>{
    const row = document.createElement('div'); row.className='keyrow';
    if(idx===2){
      const enter = makeKey('Enter','wide'); row.appendChild(enter);
    }
    for(const ch of keys){
      row.appendChild(makeKey(ch));
    }
    if(idx===2){
      const del = makeKey('Delete','wide'); row.appendChild(del);
    }
    keyboardEl.appendChild(row);
  });
}

function makeKey(label, extra=''){
  const btn = document.createElement('button');
  btn.className = 'key ' + (extra||'');
  btn.textContent = label;
  btn.addEventListener('click', ()=>onKey(label));
  return btn;
}

function onKey(label){
  if(label === 'Enter'){
    if(gameOver){
      resetGame();
      return;
    }
    return submitGuess();
  }
  if(label === 'Delete') return deleteLetter();
  if(label.length === 1 && /^[a-zA-Z]$/.test(label)) return addLetter(label.toLowerCase());
}

function resetGame(){
  board = Array.from({length:ROWS}, () => Array(COLS).fill(''));
  curRow = 0;
  curCol = 0;
  init();
}

function addLetter(ch){
  if(gameOver || curCol>=COLS) return;
  board[curRow][curCol] = ch;
  curCol++;
  updateCurrentRow();
}

function deleteLetter(){
  if(gameOver || curCol<=0) return;
  curCol--;
  board[curRow][curCol] = '';
  updateCurrentRow();
}

function submitGuess(){
  if(gameOver) return;
  if(curCol !== COLS) { showMessage('Not enough letters'); return; }
  const guess = board[curRow].join('');
  // Accept any 5-letter word (no dictionary check for guesses)
  
  const result = evaluate(guess, secret);
  applyResultToRow(result, curRow);
  
  if(result.every(r=>r.state==='correct')){
    gameOver = true;
    showMessage('🎉 You win!');
    return;
  }
  
  curRow++;
  curCol = 0;
  
  if(curRow >= ROWS){
    gameOver = true;
    showMessage('Game Over! Word was: ' + secret.toUpperCase());
  }
}

function evaluate(guess, answer){
  const res = Array(COLS).fill(null).map(()=>({letter:'',state:'absent'}));
  const ans = answer.split('');
  const g = guess.split('');
  // first pass correct
  for(let i=0;i<COLS;i++){
    res[i].letter = g[i];
    if(g[i] === ans[i]){ res[i].state = 'correct'; ans[i] = null; }
  }
  // second pass present
  for(let i=0;i<COLS;i++){
    if(res[i].state === 'correct') continue;
    const idx = ans.indexOf(g[i]);
    if(idx !== -1){ res[i].state = 'present'; ans[idx] = null; }
  }
  return res;
}

function applyResultToRow(result, row){
  const rowEl = boardEl.children[row];
  for(let c=0;c<COLS;c++){
    const tile = rowEl.children[c];
    tile.style.backgroundColor = getColor(result[c].state);
    tile.style.borderColor = getColor(result[c].state);
    
    updateKeyboard(result[c].letter, result[c].state);
  }
}

function getColor(state){
  if(state === 'correct') return '#538d4e';
  if(state === 'present') return '#b59f3b';
  return '#3a3a3c';
}

function updateKeyboard(letter, state){
  const keyBtns = Array.from(keyboardEl.querySelectorAll('.key'));
  const keyBtn = keyBtns.find(b => b.textContent.toLowerCase() === letter);
  if(!keyBtn) return;
  
  const current = keyBtn.dataset.state || 'none';
  if(current === 'correct') return;
  if(current === 'present' && state !== 'correct') return;
  
  keyBtn.dataset.state = state;
  keyBtn.classList.remove('absent', 'present', 'correct');
  keyBtn.classList.add(state);
}

function updateCurrentRow(){
  const rowEl = boardEl.children[curRow];
  for(let c=0;c<COLS;c++){
    rowEl.children[c].textContent = board[curRow][c].toUpperCase();
  }
}

function showMessage(msg){
  messageEl.textContent = msg;
  setTimeout(()=>{ if(messageEl.textContent === msg) messageEl.textContent = ''; }, 2500);
}

// keyboard input
document.addEventListener('keydown', e=>{
  // Let browser shortcuts through (Cmd, Ctrl, Alt combos)
  if(e.metaKey || e.ctrlKey || e.altKey) return;
  
  if(e.key === 'Enter'){
    e.preventDefault();
    onKey('Enter');
    return;
  }
  if(e.key === 'Backspace'){
    e.preventDefault();
    onKey('Delete');
    return;
  }
  // Only capture single letter keys a-z
  if(e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)){
    e.preventDefault();
    onKey(e.key);
  }
});

document.getElementById('newGame').addEventListener('click', ()=>{
  // reset state
  board = Array.from({length:ROWS}, () => Array(COLS).fill(''));
  curRow = 0; curCol = 0;
  // reset keyboard classes
  init();
});

// start
init();
