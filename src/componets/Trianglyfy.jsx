import React, { useEffect } from 'react'

function Trianglyfy() {

// Add this script to your component
useEffect(() => {
  const paths = document.querySelectorAll('.lowpoly-face path');
  
  paths.forEach(path => {
    path.addEventListener('mouseenter', function() {
      // Remove class first to restart animation if already running
      this.classList.remove('animating');
      
      // Force reflow to restart animation
      void this.offsetWidth;
      
      // Add animation class
      this.classList.add('animating');
    });
    
    // Remove class after animation completes
    path.addEventListener('animationend', function() {
      this.classList.remove('animating');
    });
  });
  
  // Cleanup
  return () => {
    paths.forEach(path => {
      path.removeEventListener('mouseenter', () => {});
      path.removeEventListener('animationend', () => {});
    });
  };
}, []);
 
    
    return (
        <div className="w-full max-w-sm mx-auto">
            <svg
                viewBox="0 0 349 620"
                className="lowpoly-face w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* PASTE THE ENTIRE SVG CONTENT HERE */}
                
            <svg xmlns="http://www.w3.org/2000/svg" width="349" height="620" fill="none" viewBox="0 0 349 620">
  <g clipPath="url(#a)">
    <path fill="#F1CC98" stroke="#F1CC98" d="m175 318-7 1-1 5 8-6Z"/>
    <path fill="#F1CF9B" stroke="#F1CF9B" d="m167 324 6 7 2-13-8 6Z"/>
    <path fill="#F2C895" stroke="#F2C895" d="M168 319h-3l2 5 1-5Z"/>
    <path fill="#EFC18D" stroke="#EFC18D" d="m167 324-10-7 10 8v-1Z"/>
    <path fill="#E7B17E" stroke="#E7B17E" d="m157 317 8 2-7-15-1 13Z"/>
    <path fill="#F3CD9A" stroke="#F3CD9A" d="m167 325 6 6-6-7v1Z"/>
    <path fill="#EEBB87" stroke="#EEBB87" d="m165 319-8-2 10 7-2-5Z"/>
    <path fill="#F1C895" stroke="#F1C895" d="m167 325-4 17 10-11-6-6Z"/>
    <path fill="#EEBD89" stroke="#EEBD89" d="m158 304 7 15h3l-10-15Z"/>
    <path fill="#F0D09D" stroke="#F0D09D" d="m173 331 15 1-13-14-2 13Z"/>
    <path fill="#F2CE9B" stroke="#F2CE9B" d="m188 332 2-3-15-11 13 14Z"/>
    <path fill="#EBC095" stroke="#EBC095" d="m145 324 18 18 4-17-22-1Z"/>
    <path fill="#F0D09D" stroke="#F0D09D" d="m173 331 6 13 9-12-15-1Z"/>
    <path fill="#F1CE9B" stroke="#F1CE9B" d="m169 347 10-3-6-13-4 16Z"/>
    <path fill="#F2CC9B" stroke="#F2CC9B" d="m190 329 4-14-19 3 15 11Z"/>
    <path fill="#F0C490" stroke="#F0C490" d="m175 318-17-14 10 15 7-1Z"/>
    <path fill="#F0C692" stroke="#F0C692" d="m181 296-23 8 17 14 6-22Z"/>
    <path fill="#F1C793" stroke="#F1C793" d="m163 342 6 5 4-16-10 11Z"/>
    <path fill="#F3C999" stroke="#F3C999" d="m190 329 7-13-3-1-4 14Z"/>
    <path fill="#EFD2B6" stroke="#EFD2B6" d="m157 317-12 7 22 1-10-8Z"/>
    <path fill="#F7EAE1" stroke="#F7EAE1" d="m144 310 1 14 12-7-13-7Z"/>
    <path fill="#F7CB9B" stroke="#F7CB9B" d="m196 301-15-5 13 19 2-14Z"/>
    <path fill="#F4CC9B" stroke="#F4CC9B" d="m194 315-13-19-6 22 19-3Z"/>
    <path fill="#F2C391" stroke="#F2C391" d="M158 304h-8l7 13 1-13Z"/>
    <path fill="#F4CC9A" stroke="#F4CC9A" d="m146 298 4 6h8l-12-6Z"/>
    <path fill="#F1CE9C" stroke="#F1CE9C" d="m169 347 13 7-3-10-10 3Z"/>
    <path fill="#EDC08B" stroke="#EDC08B" d="m163 342 5 9 1-4-6-5Z"/>
    <path fill="#E5B580" stroke="#E5B580" d="m164 356 4-5-5-9 1 14Z"/>
    <path fill="#F1CF9D" stroke="#F1CF9D" d="m179 344 9 4v-16l-9 12Z"/>
    <path fill="#F4CC9B" stroke="#F4CC9B" d="m188 332 18 8-16-11-2 3Z"/>
    <path fill="#F6CA9C" stroke="#F6CA9C" d="m190 329 22-1-15-12-7 13Z"/>
    <path fill="#F1D19D" stroke="#F1D19D" d="m186 352 2-4-9-4 7 8Z"/>
    <path fill="#EFCEB2" stroke="#EFCEB2" d="m145 324 6 20 12-2-18-18Z"/>
    <path fill="#F2C594" stroke="#F2C594" d="m150 304-6 6 13 7-7-13Z"/>
    <path fill="#F2C898" stroke="#F2C898" d="m197 316-1-15-2 14 3 1Z"/>
    <path fill="#E9AF7C" stroke="#E9AF7C" d="M151 344v3l12-5-12 2Z"/>
    <path fill="#F0D09E" stroke="#F0D09E" d="m182 354 4-2-7-8 3 10Z"/>
    <path fill="#F1C896" stroke="#F1C896" d="m168 351 14 3-13-7-1 4Z"/>
    <path fill="#F7CB9D" stroke="#F7CB9D" d="m196 301-5-7-10 2 15 5Z"/>
    <path fill="#DEA871" stroke="#DEA871" d="m151 347 13 9-1-14-12 5Z"/>
    <path fill="#EEC391" stroke="#EEC391" d="m168 351-4 5 18-2-14-3Z"/>
    <path fill="#E9B780" stroke="#E9B780" d="m181 296-21-6-2 14 23-8Z"/>
    <path fill="#F4C99D" stroke="#F4C99D" d="m150 304-4-6-2 12 6-6Z"/>
    <path fill="#EEBF88" stroke="#EEBF88" d="m171 282-11 8 21 6-10-14Z"/>
    <path fill="#CC7F55" stroke="#CC7F55" d="m160 290-14 8 12 6 2-14Z"/>
    <path fill="#F3CE9E" stroke="#F3CE9E" d="m188 348 18-8-18-8v16Z"/>
    <path fill="#F3CC9D" stroke="#F3CC9D" d="m197 316 11-18-12 3 1 15Z"/>
    <path fill="#F1D0A1" stroke="#F1D0A1" d="m201 354 5-14-18 8 13 6Z"/>
    <path fill="#F6CD9B" stroke="#F6CD9B" d="m191 294-15-11 5 13 10-2Z"/>
    <path fill="#E4AD79" stroke="#E4AD79" d="m151 347 8 20 5-11-13-9Z"/>
    <path fill="#F7CF9E" stroke="#F7CF9E" d="m191 294 6-3-21-8 15 11Z"/>
    <path fill="#F4CD9F" stroke="#F4CD9F" d="m196 301 1-10-6 3 5 7Z"/>
    <path fill="#F1C99B" stroke="#F1C99B" d="m208 298-11-7-1 10 12-3Z"/>
    <path fill="#F5CEA0" stroke="#F5CEA0" d="m206 340 6-12-22 1 16 11Z"/>
    <path fill="#F1C993" stroke="#F1C993" d="m176 283-5-1 10 14-5-13Z"/>
    <path fill="#CA7349" stroke="#CA7349" d="m160 290-20-7 6 15 14-8Z"/>
    <path fill="#F4DAC1" stroke="#F4DAC1" d="m146 298-10 6 8 6 2-12Z"/>
    <path fill="#ECC7A8" stroke="#ECC7A8" d="m140 283-4 21 10-6-6-15Z"/>
    <path fill="#F0C79B" stroke="#F0C79B" d="m212 328 6-10-21-2 15 12Z"/>
    <path fill="#E3BC91" stroke="#E3BC91" d="m223 339-9-12-2 1 11 11Z"/>
    <path fill="#F1D09E" stroke="#F1D09E" d="m186 352 15 2-13-6-2 4Z"/>
    <path fill="#E0BC8F" stroke="#E0BC8F" d="m206 340 17-1-11-11-6 12Z"/>
    <path fill="#F1CF9E" stroke="#F1CF9E" d="m191 362 10-8-15-2 5 10Z"/>
    <path fill="#F1CD9A" stroke="#F1CD9A" d="m191 362-5-10-4 2 9 8Z"/>
    <path fill="#F1CC9F" stroke="#F1CC9F" d="m217 304-9-6-11 18 20-12Z"/>
    <path fill="#F1C897" stroke="#F1C897" d="m181 368 10-6-9-8-1 14Z"/>
    <path fill="#DAAB80" stroke="#DAAB80" d="m214 327 4-9-6 10 2-1Z"/>
    <path fill="#EDC18F" stroke="#EDC18F" d="m164 356 17 12 1-14-18 2Z"/>
    <path fill="#DFAE7C" stroke="#DFAE7C" d="m166 369 15-1-17-12 2 13Z"/>
    <path fill="#E9BC94" stroke="#E9BC94" d="m142 362 17 5-8-20-9 15Z"/>
    <path fill="#CF9B6A" stroke="#CF9B6A" d="m159 367 7 2-2-13-5 11Z"/>
    <path fill="#F0C293" stroke="#F0C293" d="m208 298-1-7h-10l11 7Z"/>
    <path fill="#F1C892" stroke="#F1C892" d="m200 272-19-5-5 16 24-11Z"/>
    <path fill="#F2BB8C" stroke="#F2BB8C" d="m210 287-3 4 1 7 2-11Z"/>
    <path fill="#D38C5A" stroke="#D38C5A" d="m171 282-16-4 5 12 11-8Z"/>
    <path fill="#C69264" stroke="#C69264" d="m170 266-15 12 16 4-1-16Z"/>
    <path fill="#F3BE8F" stroke="#F3BE8F" d="m207 291-1-3-9 3h10Z"/>
    <path fill="#F1C78F" stroke="#F1C78F" d="m176 283 5-16-10 15 5 1Z"/>
    <path fill="#F3B585" stroke="#F3B585" d="M206 287v1l4-1h-4Z"/>
    <path fill="#F1CB9E" stroke="#F1CB9E" d="m218 318-1-14-20 12 21 2Z"/>
    <path fill="#F3BE8E" stroke="#F3BE8E" d="M206 288v-1l-9 4 9-3Z"/>
    <path fill="#F3B687" stroke="#F3B687" d="m210 287-4 1 1 3 3-4Z"/>
    <path fill="#C5673D" stroke="#C5673D" d="m155 278-15 5 20 7-5-12Z"/>
    <path fill="#D9A679" stroke="#D9A679" d="m215 353 3-8-12-5 9 13Z"/>
    <path fill="#E2B68C" stroke="#E2B68C" d="m214 327 16 9-12-18-4 9Z"/>
    <path fill="#EABC8F" stroke="#EABC8F" d="m215 353-9-13-5 14 14-1Z"/>
    <path fill="#EFBE8F" stroke="#EFBE8F" d="m217 304-7-17-2 11 9 6Z"/>
    <path fill="#F2C895" stroke="#F2C895" d="m200 272-24 11 21 8 3-19Z"/>
    <path fill="#E5B588" stroke="#E5B588" d="m211 359 4-6-14 1 10 5Z"/>
    <path fill="#F1CB9C" stroke="#F1CB9C" d="m204 367-3-13-10 8 13 5Z"/>
    <path fill="#F0C696" stroke="#F0C696" d="m181 368 13 3-3-9-10 6Z"/>
    <path fill="#EEC393" stroke="#EEC393" d="M194 373v-2l-13-3 13 5Z"/>
    <path fill="#ECC093" stroke="#ECC093" d="m204 367 7-8-10-5 3 13Z"/>
    <path fill="#D7AA7F" stroke="#D7AA7F" d="m218 345 5-6-17 1 12 5Z"/>
    <path fill="#EEB68A" stroke="#EEB68A" d="m236 308-6-9-13 5 19 4Z"/>
    <path fill="#CF9A73" stroke="#CF9A73" d="m225 340-2-1-5 6 7-5Z"/>
    <path fill="#B08460" stroke="#B08460" d="M142 362v5h17l-17-5Z"/>
    <path fill="#EBBA8B" stroke="#EBBA8B" d="m159 367-4 8 11-6-7-2Z"/>
    <path fill="#1F130F" stroke="#1F130F" d="m122 362 20 5v-5h-20Z"/>
    <path fill="#F0CA9B" stroke="#F0CA9B" d="m194 371 10-4-13-5 3 9Z"/>
    <path fill="#EBC394" stroke="#EBC394" d="m194 371 6 1 4-5-10 4Z"/>
    <path fill="#E1B281" stroke="#E1B281" d="m174 383 20-10-13-5-7 15Z"/>
    <path fill="#D19D6D" stroke="#D19D6D" d="m174 383 7-15-15 1 8 14Z"/>
    <path fill="#F1C191" stroke="#F1C191" d="m142 367 13 8 4-8h-17Z"/>
    <path fill="#D6AF86" stroke="#D6AF86" d="m223 339 5-2-14-10 9 12Z"/>
    <path fill="#AB674B" stroke="#AB674B" d="m235 354-10-14-7 5 17 9Z"/>
    <path fill="#AF724F" stroke="#AF724F" d="m223 359-5-14-3 8 8 6Z"/>
    <path fill="#F1BC8B" stroke="#F1BC8B" d="m200 272-3 19 9-4-6-15Z"/>
    <path fill="#E9AF85" stroke="#E9AF85" d="m155 278-16-1 1 6 15-5Z"/>
    <path fill="#E4A07B" stroke="#E4A07B" d="m145 264-6 13 16 1-10-14Z"/>
    <path fill="#F0C18C" stroke="#F0C18C" d="m181 267-11-1 1 16 10-15Z"/>
    <path fill="#E8BA8E" stroke="#E8BA8E" d="m204 367 8-4-1-4-7 8Z"/>
    <path fill="#EEC899" stroke="#EEC899" d="m194 373 6-1-6-1v2Z"/>
    <path fill="#E5BA8E" stroke="#E5BA8E" d="m214 381-2-18-8 4 10 14Z"/>
    <path fill="#D29D72" stroke="#D29D72" d="m211 359 3 3 1-9-4 6Z"/>
    <path fill="#F0AE7C" stroke="#F0AE7C" d="m210 287 4-4-8 4h4Z"/>
    <path fill="#E29E6D" stroke="#E29E6D" d="m226 286-12-3-4 4 16-1Z"/>
    <path fill="#EDB383" stroke="#EDB383" d="m226 286-16 1 7 17 9-18Z"/>
    <path fill="#EFB07E" stroke="#EFB07E" d="m213 277-13-5 6 15 7-10Z"/>
    <path fill="#E3AB83" stroke="#E3AB83" d="m223 359 7 11-2-10-5-1Z"/>
    <path fill="#E8B78B" stroke="#E8B78B" d="m212 363 2-1-3-3 1 4Z"/>
    <path fill="#CBA078" stroke="#CBA078" d="m225 340 3-3-5 2 2 1Z"/>
    <path fill="#CC8F6D" stroke="#CC8F6D" d="m230 336-2 1 7 17-5-18Z"/>
    <path fill="#EEBE90" stroke="#EEBE90" d="m155 375 3 4 8-10-11 6Z"/>
    <path fill="#F2C596" stroke="#F2C596" d="m138 380 20-1-3-4-17 5Z"/>
    <path fill="#D0AA83" stroke="#D0AA83" d="m228 337 2-1-16-9 14 10Z"/>
    <path fill="#CB8A69" stroke="#CB8A69" d="m235 354-7-17-3 3 10 14Z"/>
    <path fill="#E2AE7E" stroke="#E2AE7E" d="m158 379 16 4-8-14-8 10Z"/>
    <path fill="#DFBB8D" stroke="#DFBB8D" d="m195 396 19-15-14-9-5 24Z"/>
    <path fill="#DE9968" stroke="#DE9968" d="m222 272-9 5 1 6 8-11Z"/>
    <path fill="#EAA775" stroke="#EAA775" d="m214 283-1-6-7 10 8-4Z"/>
    <path fill="#EDB588" stroke="#EDB588" d="m236 308-19-4 1 14 18-10Z"/>
    <path fill="#D39D74" stroke="#D39D74" d="m214 362 9-3-8-6-1 9Z"/>
    <path fill="#DEA980" stroke="#DEA980" d="m223 359-9 3 16 8-7-11Z"/>
    <path fill="#EDB186" stroke="#EDB186" d="M211 265h-13l2 7 11-7Z"/>
    <path fill="#F0BC8B" stroke="#F0BC8B" d="m200 272-2-7-17 2 19 5Z"/>
    <path fill="#694A34" stroke="#694A34" d="m173 258-13 2 10 6 3-8Z"/>
    <path fill="#B1825C" stroke="#B1825C" d="m170 266-10-6-5 18 15-12Z"/>
    <path fill="#CFA16F" stroke="#CFA16F" d="m173 258-3 8 11 1-8-9Z"/>
    <path fill="#E5AD7D" stroke="#E5AD7D" d="m142 367-4 13 17-5-13-8Z"/>
    <path fill="#DE9B71" stroke="#DE9B71" d="m160 260-15 4 10 14 5-18Z"/>
    <path fill="#EDC28C" stroke="#EDC28C" d="M185 258h-12l8 9 4-9Z"/>
    <path fill="#EFB98B" stroke="#EFB98B" d="m230 299-4-13-9 18 13-5Z"/>
    <path fill="#E8AA7C" stroke="#E8AA7C" d="m213 277-2-12-11 7 13 5Z"/>
    <path fill="#F0BA8B" stroke="#F0BA8B" d="m230 299 10 3-14-16 4 13Z"/>
    <path fill="#E6AF83" stroke="#E6AF83" d="m238 333-2-25-18 10 20 15Z"/>
    <path fill="#F2C693" stroke="#F2C693" d="m198 265-13-7-4 9 17-2Z"/>
    <path fill="#766053" stroke="#766053" d="m160 248-4 10 4 2v-12Z"/>
    <path fill="#D59B71" stroke="#D59B71" d="m160 260-4-2-11 6 15-4Z"/>
    <path fill="#D6AB81" stroke="#D6AB81" d="m230 336 8-3-20-15 12 18Z"/>
    <path fill="#CC9170" stroke="#CC9170" d="m239 353-1-20-8 3 9 17Z"/>
    <path fill="#492E20" stroke="#492E20" d="m122 362 16 18 4-13-20-5Z"/>
    <path fill="#E9B581" stroke="#E9B581" d="m158 379 9 12 7-8-16-4Z"/>
    <path fill="#AC6D52" stroke="#AC6D52" d="m223 359 12-5-17-9 5 14Z"/>
    <path fill="#E8BA8F" stroke="#E8BA8F" d="M214 381v-19l-2 1 2 18Z"/>
    <path fill="#705541" stroke="#705541" d="M173 258v-4l-13 6 13-2Z"/>
    <path fill="#C29263" stroke="#C29263" d="m185 258-12-4v4h12Z"/>
    <path fill="#EBB589" stroke="#EBB589" d="m236 308 4-6-10-3 6 9Z"/>
    <path fill="#F1C297" stroke="#F1C297" d="m247 313-8-6-3 1 11 5Z"/>
    <path fill="#EDB986" stroke="#EDB986" d="m166 392 1-1-9-12 8 13Z"/>
    <path fill="#E1BA8A" stroke="#E1BA8A" d="m195 396 5-24-6 1 1 23Z"/>
    <path fill="#E8C194" stroke="#E8C194" d="m200 372 14 9-10-14-4 5Z"/>
    <path fill="#D69466" stroke="#D69466" d="m222 272-11-7 2 12 9-5Z"/>
    <path fill="#F2C799" stroke="#F2C799" d="m198 265 1-9-14 2 13 7Z"/>
    <path fill="#CE9C6C" stroke="#CE9C6C" d="m185 258-8-8-4 4 12 4Z"/>
    <path fill="#E0BD90" stroke="#E0BD90" d="m215 382-1-1-10 20 11-19Z"/>
    <path fill="#F1C492" stroke="#F1C492" d="m147 394 19-2-8-13-11 15Z"/>
    <path fill="#F4CB9E" stroke="#F4CB9E" d="m239 307 1-5-4 6 3-1Z"/>
    <path fill="#F1D2A6" stroke="#F1D2A6" d="m247 313-7-7-1 1 8 6Z"/>
    <path fill="#E4AC8A" stroke="#E4AC8A" d="m228 360 7-6-12 5 5 1Z"/>
    <path fill="#F3CFA3" stroke="#F3CFA3" d="M240 306v-4l-1 5 1-1Z"/>
    <path fill="#D5905E" stroke="#D5905E" d="m226 286-4-14-8 11 12 3Z"/>
    <path fill="#C87E51" stroke="#C87E51" d="M225 272h-3l4 14-1-14Z"/>
    <path fill="#D59B75" stroke="#D59B75" d="m211 259-13 6h13v-6Z"/>
    <path fill="#D89F77" stroke="#D89F77" d="m211 259-12-3-1 9 13-6Z"/>
    <path fill="#CFA06D" stroke="#CFA06D" d="m194 373-20 10 21 13-1-23Z"/>
    <path fill="#F3AC95" stroke="#F3AC95" d="m242 361-3-8-4 1 7 7Z"/>
    <path fill="#604937" stroke="#604937" d="m173 254-13-6v12l13-6Z"/>
    <path fill="#EFBF89" stroke="#EFBF89" d="m195 239-18 11 8 8 10-19Z"/>
    <path fill="#AF663E" stroke="#AF663E" d="m233 270-8 2 1 14 7-16Z"/>
    <path fill="#9F684B" stroke="#9F684B" d="m222 253-11 6v6l11-12Z"/>
    <path fill="#DFAE82" stroke="#DFAE82" d="m214 381 16-11-16-8v19Z"/>
    <path fill="#D49D69" stroke="#D49D69" d="m195 396-21-13-7 8 28 5Z"/>
    <path fill="#EFB59A" stroke="#EFB59A" d="m242 361-7-7-7 6 14 1Z"/>
    <path fill="#C5775E" stroke="#C5775E" d="m235 354 4-1-9-17 5 18Z"/>
    <path fill="#E1AF85" stroke="#E1AF85" d="m238 333 8-12-10-13 2 25Z"/>
    <path fill="#CD9D72" stroke="#CD9D72" d="m250 325-4-4-8 12 12-8Z"/>
    <path fill="#F1CAA3" stroke="#F1CAA3" d="m240 306 12-6-12 2v4Z"/>
    <path fill="#A06649" stroke="#A06649" d="m222 253-11 12 11 7v-19Z"/>
    <path fill="#6F5742" stroke="#6F5742" d="m180 232-14 12 11 6 3-18Z"/>
    <path fill="#E1B487" stroke="#E1B487" d="m215 382 15-12-16 11 1 1Z"/>
    <path fill="#5E4A39" stroke="#5E4A39" d="m166 244-6 4 13 6-7-10Z"/>
    <path fill="#E8D1C0" stroke="#E8D1C0" d="m156 258 4-10-15 16 11-6Z"/>
    <path fill="#EAB187" stroke="#EAB187" d="m246 321 1-8-11-5 10 13Z"/>
    <path fill="#974F2E" stroke="#974F2E" d="m239 272-6-2-7 16 13-14Z"/>
    <path fill="#F1C695" stroke="#F1C695" d="m138 380 9 14 11-15-20 1Z"/>
    <path fill="#432920" stroke="#432920" d="m122 362 6 22 10-4-16-18Z"/>
    <path fill="#6D6764" stroke="#6D6764" d="m97 358 31 26-6-22-25-4Z"/>
    <path fill="#F3C797" stroke="#F3C797" d="m146 395 1-1-9-14 8 15Z"/>
    <path fill="#CC7A54" stroke="#CC7A54" d="m246 321 2-7-1-1-1 8Z"/>
    <path fill="#EEC49A" stroke="#EEC49A" d="m247 313 5-13-12 6 7 7Z"/>
    <path fill="#E8B88E" stroke="#E8B88E" d="m253 325-5-11-2 7 7 4Z"/>
    <path fill="#E2AB76" stroke="#E2AB76" d="m190 407 5-11-28-5 23 16Z"/>
    <path fill="#EAB37E" stroke="#EAB37E" d="m190 407-23-16-1 1 24 15Z"/>
    <path fill="#F2C793" stroke="#F2C793" d="m147 394 4 5 15-7-19 2Z"/>
    <path fill="#C28E65" stroke="#C28E65" d="m128 384 18 11-8-15-10 4Z"/>
    <path fill="#C6946B" stroke="#C6946B" d="M250 333v-8l-12 8h12Z"/>
    <path fill="#725742" stroke="#725742" d="m177 250-11-6 7 10 4-4Z"/>
    <path fill="#F2CB9C" stroke="#F2CB9C" d="m195 239-10 19 14-2-4-17Z"/>
    <path fill="#CE8869" stroke="#CE8869" d="m254 336-4-3-11 20 15-17Z"/>
    <path fill="#D08F6E" stroke="#D08F6E" d="m239 353 11-20h-12l1 20Z"/>
    <path fill="#F2CC98" stroke="#F2CC98" d="m146 395 5 4-4-5-1 1Z"/>
    <path fill="#F1C995" stroke="#F1C995" d="m150 406 1-7-5-4 4 11Z"/>
    <path fill="#E7AB89" stroke="#E7AB89" d="m230 370 12-9-14-1 2 10Z"/>
    <path fill="#D69276" stroke="#D69276" d="m246 367-4-6 1 12 3-6Z"/>
    <path fill="#83482D" stroke="#83482D" d="m225 272-3-19v19h3Z"/>
    <path fill="#B16B42" stroke="#B16B42" d="m239 272-13 14 21-11-8-3Z"/>
    <path fill="#BC8D64" stroke="#BC8D64" d="m250 333 3-8h-3v8Z"/>
    <path fill="#DAAC84" stroke="#DAAC84" d="M250 325h3l-7-4 4 4Z"/>
    <path fill="#BC6F51" stroke="#BC6F51" d="m248 314 4-14-5 13 1 1Z"/>
    <path fill="#CD976E" stroke="#CD976E" d="m254 336-1-11-3 8 4 3Z"/>
    <path fill="#F8D8B2" stroke="#F8D8B2" d="M261 300h-9l13 12-4-12Z"/>
    <path fill="#DAA780" stroke="#DAA780" d="m253 325 6-4-11-7 5 11Z"/>
    <path fill="#C77E60" stroke="#C77E60" d="m263 340-9-4-15 17 24-13Z"/>
    <path fill="#632F1D" stroke="#632F1D" d="m233 270-11-17 3 19 8-2Z"/>
    <path fill="#DC9D6E" stroke="#DC9D6E" d="m247 275-21 11 24-8-3-3Z"/>
    <path fill="#CEA97B" stroke="#CEA97B" d="m195 396 9 5 10-20-19 15Z"/>
    <path fill="#CF8E6B" stroke="#CF8E6B" d="m243 373-1-12-12 9 13 3Z"/>
    <path fill="#BC8957" stroke="#BC8957" d="m190 407 14-6-9-5-5 11Z"/>
    <path fill="#F1C89B" stroke="#F1C89B" d="M211 239h-16l4 17 12-17Z"/>
    <path fill="#4F2418" stroke="#4F2418" d="m245 266-23-13 11 17 12-4Z"/>
    <path fill="#C9755E" stroke="#C9755E" d="m242 361 21-21-24 13 3 8Z"/>
    <path fill="#CE9366" stroke="#CE9366" d="m243 373-13-3v24l13-21Z"/>
    <path fill="#F0BB86" stroke="#F0BB86" d="m151 399 18 15-3-22-15 7Z"/>
    <path fill="#F2C694" stroke="#F2C694" d="m139 412 11-6-4-11-7 17Z"/>
    <path fill="#845E46" stroke="#845E46" d="m126 399 20-4-18-11-2 15Z"/>
    <path fill="#EEB781" stroke="#EEB781" d="m169 414 21-7-24-15 3 22Z"/>
    <path fill="#E9B78E" stroke="#E9B78E" d="m211 239-12 17 12 3v-20Z"/>
    <path fill="#C08C65" stroke="#C08C65" d="m254 336 5-15-6 4 1 11Z"/>
    <path fill="#B2805E" stroke="#B2805E" d="m267 322-8-1 9 15-1-14Z"/>
    <path fill="#DDAC7E" stroke="#DDAC7E" d="M230 394v-24l-15 12 15 12Z"/>
    <path fill="#662717" stroke="#662717" d="m239 272 6-6-12 4 6 2Z"/>
    <path fill="#EFBD8E" stroke="#EFBD8E" d="m250 278-24 8 14 16 10-24Z"/>
    <path fill="#F1CB9E" stroke="#F1CB9E" d="m250 278-10 24 12-2-2-22Z"/>
    <path fill="#AEABAA" stroke="#AEABAA" d="m97 358-5 3 36 23-31-26Z"/>
    <path fill="#231813" stroke="#231813" d="m106 403 20-4 2-15-22 19Z"/>
    <path fill="#F2CD9E" stroke="#F2CD9E" d="m261 291-11-13 2 22 9-9Z"/>
    <path fill="#684737" stroke="#684737" d="M126 399v1l20-5-20 4Z"/>
    <path fill="#1E1510" stroke="#1E1510" d="m106 403 20-3v-1l-20 4Z"/>
    <path fill="#C99869" stroke="#C99869" d="m195 239-15-7-3 18 18-11Z"/>
    <path fill="#5C4E43" stroke="#5C4E43" d="m166 244-6-21v25l6-4Z"/>
    <path fill="#D4AF84" stroke="#D4AF84" d="m204 401 13 1-2-20-11 19Z"/>
    <path fill="#7C4D29" stroke="#7C4D29" d="m219 409-5 6 2-1 3-5Z"/>
    <path fill="#F1BD87" stroke="#F1BD87" d="m150 406 19 8-18-15-1 7Z"/>
    <path fill="#DCA571" stroke="#DCA571" d="m190 407 9 6 5-12-14 6Z"/>
    <path fill="#EDB47B" stroke="#EDB47B" d="m157 421 12-7-19-8 7 15Z"/>
    <path fill="#AB7B62" stroke="#AB7B62" d="m265 312-13-12-4 14 17-2Z"/>
    <path fill="#E0AA78" stroke="#E0AA78" d="m195 239 3-9-18 2 15 7Z"/>
    <path fill="#E6B990" stroke="#E6B990" d="m222 253-11-14v20l11-6Z"/>
    <path fill="#F0CA9F" stroke="#F0CA9F" d="m223 243-12-4 11 14 1-10Z"/>
    <path fill="#D6AF81" stroke="#D6AF81" d="m217 402 13-8-15-12 2 20Z"/>
    <path fill="#7A3920" stroke="#7A3920" d="m247 275-2-9-6 6 8 3Z"/>
    <path fill="#A66644" stroke="#A66644" d="m254 272-9-6 2 9 7-3Z"/>
    <path fill="#EAB481" stroke="#EAB481" d="m253 276-6-1 3 3 3-2Z"/>
    <path fill="#AC6551" stroke="#AC6551" d="m251 375 2-8h-7l5 8Z"/>
    <path fill="#DC9078" stroke="#DC9078" d="M246 367h7l-11-6 4 6Z"/>
    <path fill="#AB634D" stroke="#AB634D" d="M255 367h-2l-2 8 4-8Z"/>
    <path fill="#BC6150" stroke="#BC6150" d="m255 367 8-27-21 21 13 6Z"/>
    <path fill="#B38161" stroke="#B38161" d="m259 321 6-9-17 2 11 7Z"/>
    <path fill="#F2BC85" stroke="#F2BC85" d="M169 414h20l1-7-21 7Z"/>
    <path fill="#ECBC88" stroke="#ECBC88" d="M254 276h-1l-3 2 4-2Z"/>
    <path fill="#E9B98F" stroke="#E9B98F" d="m267 322-2-10-6 9 8 1Z"/>
    <path fill="#D88A72" stroke="#D88A72" d="M253 367h2l-13-6 11 6Z"/>
    <path fill="#854B33" stroke="#854B33" d="m251 375-5-8-3 6 8 2Z"/>
    <path fill="#E7AB7C" stroke="#E7AB7C" d="m253 276 1-4-7 3 6 1Z"/>
    <path fill="#F2CD9C" stroke="#F2CD9C" d="m261 291-7-15-4 2 11 13Z"/>
    <path fill="#F1C79A" stroke="#F1C79A" d="m261 291-9 9h9v-9Z"/>
    <path fill="#F2C699" stroke="#F2C699" d="m264 298-3-7v9l3-2Z"/>
    <path fill="#AF6E4A" stroke="#AF6E4A" d="m253 256-30-13-1 10 31 3Z"/>
    <path fill="#EDB881" stroke="#EDB881" d="m189 414 10-1-9-6-1 7Z"/>
    <path fill="#B67C56" stroke="#B67C56" d="m238 395 13-20-8-2-5 22Z"/>
    <path fill="#F3C89C" stroke="#F3C89C" d="m267 301-3-3-3 2 6 1Z"/>
    <path fill="#926142" stroke="#926142" d="m268 336-9-15-5 15h14Z"/>
    <path fill="#E9BB8C" stroke="#E9BB8C" d="m211 239-4-5-12 5h16Z"/>
    <path fill="#D7AF86" stroke="#D7AF86" d="M212 234h-5l4 5 1-5Z"/>
    <path fill="#FAD5AE" stroke="#FAD5AE" d="m267 301-6-1 4 12 2-11Z"/>
    <path fill="#D1A77B" stroke="#D1A77B" d="m126 400 13 12 7-17-20 5Z"/>
    <path fill="#EFBB85" stroke="#EFBB85" d="m207 234-9-4-3 9 12-5Z"/>
    <path fill="#BE956D" stroke="#BE956D" d="m230 235-8-1 1 9 7-8Z"/>
    <path fill="#E7B07F" stroke="#E7B07F" d="M254 276v-4l-1 4h1Z"/>
    <path fill="#ECB785" stroke="#ECB785" d="m257 274-3-2v4l3-2Z"/>
    <path fill="#F1CB98" stroke="#F1CB98" d="m257 274-3 2 13 6-10-8Z"/>
    <path fill="#884B32" stroke="#884B32" d="m263 340 5-4h-14l9 4Z"/>
    <path fill="#B57B61" stroke="#B57B61" d="m270 339-2-3-5 4 7-1Z"/>
    <path fill="#F0B883" stroke="#F0B883" d="m207 234 1-14-10 10 9 4Z"/>
    <path fill="#D9B48B" stroke="#D9B48B" d="M222 234h-10l-1 5 11-5Z"/>
    <path fill="#F2C596" stroke="#F2C596" d="m264 298 4 1-7-8 3 7Z"/>
    <path fill="#F1C096" stroke="#F1C096" d="m268 299-1 2 6 7-5-9Z"/>
    <path fill="#F2C49A" stroke="#F2C49A" d="m267 301-2 11 8-4-6-7Z"/>
    <path fill="#5D2615" stroke="#5D2615" d="m253 256-31-3 23 13 8-10Z"/>
    <path fill="#F2CE9C" stroke="#F2CE9C" d="m267 282-13-6 7 15 6-9Z"/>
    <path fill="#CD986D" stroke="#CD986D" d="m230 394 8 1 5-22-13 21Z"/>
    <path fill="#B7875E" stroke="#B7875E" d="m241 400-3-5-8-1 11 6Z"/>
    <path fill="#BD9467" stroke="#BD9467" d="m219 409 11-15-13 8 2 7Z"/>
    <path fill="#936B47" stroke="#936B47" d="m219 409-2-7-3 13 5-6Z"/>
    <path fill="#F3C496" stroke="#F3C496" d="m267 301 1-2-4-1 3 3Z"/>
    <path fill="#DEA57D" stroke="#DEA57D" d="M272 312h-7l8 3-1-3Z"/>
    <path fill="#4E2F1E" stroke="#4E2F1E" d="m268 336 4-11-5-3 1 14Z"/>
    <path fill="#47231A" stroke="#47231A" d="m278 351-8-12-7 1 15 11Z"/>
    <path fill="#873C32" stroke="#873C32" d="m272 364-9-24-8 27 17-3Z"/>
    <path fill="#EBB27A" stroke="#EBB27A" d="m169 414 7 10 13-10h-20Z"/>
    <path fill="#C68D5C" stroke="#C68D5C" d="m214 415-10-14-5 12 15 2Z"/>
    <path fill="#F1BE87" stroke="#F1BE87" d="m139 412 18 9-7-15-11 6Z"/>
    <path fill="#2C1A11" stroke="#2C1A11" d="m273 333-1-8-4 11 5-3Z"/>
    <path fill="#605344" stroke="#605344" d="m180 232-20-9 6 21 14-12Z"/>
    <path fill="#514738" stroke="#514738" d="m175 210-15 13 20 9-5-22Z"/>
    <path fill="#F2BD83" stroke="#F2BD83" d="M139 412v12l18-3-18-9Z"/>
    <path fill="#664A38" stroke="#664A38" d="m126 400 3 13 10-1-13-12Z"/>
    <path fill="#201813" stroke="#201813" d="m106 403 23 10-3-13-20 3Z"/>
    <path fill="#DEA477" stroke="#DEA477" d="m273 315-8-3 2 10 6-7Z"/>
    <path fill="#3E3734" stroke="#3E3734" d="m92 361 14 42 22-19-36-23Z"/>
    <path fill="#E8B085" stroke="#E8B085" d="m272 312 1-4-8 4h7Z"/>
    <path fill="#91573A" stroke="#91573A" d="m272 325 1-10-6 7 5 3Z"/>
    <path fill="#614331" stroke="#614331" d="m129 413 2 2 8-3-10 1Z"/>
    <path fill="#573423" stroke="#573423" d="m272 325 4-1-3-9-1 10Z"/>
    <path fill="#663E2B" stroke="#663E2B" d="m270 339 3-6-5 3 2 3Z"/>
    <path fill="#E4C098" stroke="#E4C098" d="m223 243-1-9-11 5 12 4Z"/>
    <path fill="#EAB582" stroke="#EAB582" d="m212 234-4-14-1 14h5Z"/>
    <path fill="#504335" stroke="#504335" d="m182 207-7 3 5 22 2-25Z"/>
    <path fill="#7A351C" stroke="#7A351C" d="m256 260-11 6 9 6 2-12Z"/>
    <path fill="#A77B53" stroke="#A77B53" d="m214 415 3-13-13-1 10 14Z"/>
    <path fill="#B08359" stroke="#B08359" d="m219 409 22-9-11-6-11 15Z"/>
    <path fill="#DDA16B" stroke="#DDA16B" d="m214 415-15-2-2 9 17-7Z"/>
    <path fill="#EAB17B" stroke="#EAB17B" d="m197 422 2-9-10 1 8 8Z"/>
    <path fill="#E4A86F" stroke="#E4A86F" d="m157 421 19 3-7-10-12 7Z"/>
    <path fill="#A06147" stroke="#A06147" d="m279 307-6 1 8 4-2-5Z"/>
    <path fill="#EFBA8A" stroke="#EFBA8A" d="m277 286-10-4-6 9 16-5Z"/>
    <path fill="#F0B980" stroke="#F0B980" d="m176 424 21-2-8-8-13 10Z"/>
    <path fill="#EDB889" stroke="#EDB889" d="m277 286-16 5 7 8 9-13Z"/>
    <path fill="#D59F73" stroke="#D59F73" d="m263 270-7-10-2 12 9-2Z"/>
    <path fill="#6D4C31" stroke="#6D4C31" d="m237 419 4-19-22 9 18 10Z"/>
    <path fill="#B77F57" stroke="#B77F57" d="m238 395 3 5 10-25-13 20Z"/>
    <path fill="#6C3225" stroke="#6C3225" d="m251 375 16-1-12-7-4 8Z"/>
    <path fill="#1D0F09" stroke="#1D0F09" d="m270 339 12-8-9 2-3 6Z"/>
    <path fill="#1F1611" stroke="#1F1611" d="m273 333 3-9-4 1 1 8Z"/>
    <path fill="#C68661" stroke="#C68661" d="m281 312-8-4-1 4h9Z"/>
    <path fill="#403D3B" stroke="#403D3B" d="m77 378 29 25-14-42-15 17Z"/>
    <path fill="#2F251E" stroke="#2F251E" d="m129 413-10 15 12-13-2-2Z"/>
    <path fill="#F3CA98" stroke="#F3CA98" d="m267 282-1-5-9-3 10 8Z"/>
    <path fill="#E8B07D" stroke="#E8B07D" d="m265 271 1 6 12-10-13 4Z"/>
    <path fill="#ECBB8A" stroke="#ECBB8A" d="m263 270-9 2 3 2 6-4Z"/>
    <path fill="#863D20" stroke="#863D20" d="m256 260-3-4-8 10 11-6Z"/>
    <path fill="#E6B07C" stroke="#E6B07C" d="m222 224-14-4 4 14 10-10Z"/>
    <path fill="#AF744C" stroke="#AF744C" d="m253 256-23-21-7 8 30 13Z"/>
    <path fill="#F0C795" stroke="#F0C795" d="m266 277-3-7-6 4 9 3Z"/>
    <path fill="#D49263" stroke="#D49263" d="m266 260-5-5-5 5h10Z"/>
    <path fill="#B96C3F" stroke="#B96C3F" d="m256 260 5-5-8 1 3 4Z"/>
    <path fill="#F1C493" stroke="#F1C493" d="m266 277-1-6-2-1 3 7Z"/>
    <path fill="#EDB685" stroke="#EDB685" d="m277 283-11-6 1 5 10 1Z"/>
    <path fill="#2F2119" stroke="#2F2119" d="m119 428 20-4-8-9-12 13Z"/>
    <path fill="#B78965" stroke="#B78965" d="m131 415 8 9v-12l-8 3Z"/>
    <path fill="#E6AA6E" stroke="#E6AA6E" d="m157 421-1 11 20-8-19-3Z"/>
    <path fill="#93572F" stroke="#93572F" d="M220 421v-3l-6-3 6 6Z"/>
    <path fill="#AC7245" stroke="#AC7245" d="m214 415 6 3-4-4-2 1Z"/>
    <path fill="#6E4627" stroke="#6E4627" d="m216 414 4 4-1-9-3 5Z"/>
    <path fill="#E4A77D" stroke="#E4A77D" d="m273 308 4-11-9 2 5 9Z"/>
    <path fill="#4E281A" stroke="#4E281A" d="m276 324 3-4-6-5 3 9Z"/>
    <path fill="#190C08" stroke="#190C08" d="m282 331-3-11-3 4 6 7Z"/>
    <path fill="#BF7C57" stroke="#BF7C57" d="m280 302-3-5-4 11 7-6Z"/>
    <path fill="#B57250" stroke="#B57250" d="M281 312h-9l1 3 8-3Z"/>
    <path fill="#32150B" stroke="#32150B" d="m268 382-1-8-16 1 17 7Z"/>
    <path fill="#1C130E" stroke="#1C130E" d="m273 333 9-2-6-7-3 9Z"/>
    <path fill="#632F28" stroke="#632F28" d="m267 374 5-10-17 3 12 7Z"/>
    <path fill="#C99B70" stroke="#C99B70" d="m222 224-10 10h10v-10Z"/>
    <path fill="#6F3926" stroke="#6F3926" d="m279 320 2-8-8 3 6 5Z"/>
    <path fill="#AE6C4D" stroke="#AE6C4D" d="m279 307 1-5-7 6 6-1Z"/>
    <path fill="#291713" stroke="#291713" d="m286 309-5 3 9 14-4-17Z"/>
    <path fill="#C68854" stroke="#C68854" d="m197 422 23-1-6-6-17 7Z"/>
    <path fill="#432817" stroke="#432817" d="m220 418 17 1-18-10 1 9Z"/>
    <path fill="#64351E" stroke="#64351E" d="m225 423-5-2-1 15 6-13Z"/>
    <path fill="#240D09" stroke="#240D09" d="m272 364 6-13-15-11 9 24Z"/>
    <path fill="#55322A" stroke="#55322A" d="m286 309-6-7-1 5 7 2Z"/>
    <path fill="#D69469" stroke="#D69469" d="m277 297 2-4-11 6 9-2Z"/>
    <path fill="#1B100C" stroke="#1B100C" d="m281 351 1-20-12 8 11 12Z"/>
    <path fill="#A97C55" stroke="#A97C55" d="m230 235-8-11v10l8 1Z"/>
    <path fill="#AD7248" stroke="#AD7248" d="m219 216 3 8 1-9-4 1Z"/>
    <path fill="#F0B87C" stroke="#F0B87C" d="m139 424 17 8 1-11-18 3Z"/>
    <path fill="#EBB176" stroke="#EBB176" d="m176 424 7 12 14-14-21 2Z"/>
    <path fill="#914D35" stroke="#914D35" d="m280 302-1-9-2 4 3 5Z"/>
    <path fill="#CF8D62" stroke="#CF8D62" d="m279 293-2-7-9 13 11-6Z"/>
    <path fill="#805034" stroke="#805034" d="m253 256 2-20-25-1 23 21Z"/>
    <path fill="#E7BA8A" stroke="#E7BA8A" d="M266 260h-10l7 10 3-10Z"/>
    <path fill="#F5CFA1" stroke="#F5CFA1" d="m266 260-3 10 6-8-3-2Z"/>
    <path fill="#DA986A" stroke="#DA986A" d="M277 286v-3l-10-1 10 4Z"/>
    <path fill="#683220" stroke="#683220" d="m286 286-9-3v3h9Z"/>
    <path fill="#544637" stroke="#544637" d="m182 207-2 25 6-25h-4Z"/>
    <path fill="#775C44" stroke="#775C44" d="m180 232 18-2-12-23-6 25Z"/>
    <path fill="#1B0F0C" stroke="#1B0F0C" d="M278 351h3l-11-12 8 12Z"/>
    <path fill="#160C0A" stroke="#160C0A" d="m282 358-1-7h-3l4 7Z"/>
    <path fill="#170D0B" stroke="#170D0B" d="m282 358-4-7-6 13 10-6Z"/>
    <path fill="#F5CF9F" stroke="#F5CF9F" d="m269 262-6 8 2 1 4-9Z"/>
    <path fill="#1C0E0A" stroke="#1C0E0A" d="m267 374 13 6-8-16-5 10Z"/>
    <path fill="#7F5035" stroke="#7F5035" d="m241 400 27-18-17-7-10 25Z"/>
    <path fill="#432A1D" stroke="#432A1D" d="m269 399-1-17-27 18 28-1Z"/>
    <path fill="#6D3C24" stroke="#6D3C24" d="m220 421 5 2-5-5v3Z"/>
    <path fill="#C0814F" stroke="#C0814F" d="m219 436 1-15-23 1 22 14Z"/>
    <path fill="#D89C60" stroke="#D89C60" d="m171 441 12-5-7-12-5 17Z"/>
    <path fill="#0C0806" stroke="#0C0806" d="m106 403 9 21 14-11-23-10Z"/>
    <path fill="#C69363" stroke="#C69363" d="m139 424 4 19 13-11-17-8Z"/>
    <path fill="#090806" stroke="#090806" d="m72 394 28 17 6-8-34-9Z"/>
    <path fill="#B3764F" stroke="#B3764F" d="m266 260-2-14-3 9 5 5Z"/>
    <path fill="#F0C091" stroke="#F0C091" d="m278 267-9-5-4 9 13-4Z"/>
    <path fill="#462219" stroke="#462219" d="m280 302 6-16-7 7 1 9Z"/>
    <path fill="#4F2417" stroke="#4F2417" d="m286 286-8-19-1 16 9 3Z"/>
    <path fill="#4D2D29" stroke="#4D2D29" d="m281 312 5-3-7-2 2 5Z"/>
    <path fill="#1F0E0A" stroke="#1F0E0A" d="m290 326-9-14-2 8 11 6Z"/>
    <path fill="#1D0F0A" stroke="#1D0F0A" d="m290 326-11-6 3 11 8-5Z"/>
    <path fill="#201410" stroke="#201410" d="m293 336-3-10-8 5 11 5Z"/>
    <path fill="#140B07" stroke="#140B07" d="m280 380 2-22-10 6 8 16Z"/>
    <path fill="#7C766C" stroke="#7C766C" d="m175 210-14-3-1 16 15-13Z"/>
    <path fill="#866345" stroke="#866345" d="m186 207 12 23 10-10-22-13Z"/>
    <path fill="#7E786D" stroke="#7E786D" d="m173 188-12 19 14 3-2-22Z"/>
    <path fill="#54493C" stroke="#54493C" d="m191 199-5 8 16-9-11 1Z"/>
    <path fill="#A36640" stroke="#A36640" d="m222 224-3-8-11 4 14 4Z"/>
    <path fill="#C7895B" stroke="#C7895B" d="m223 215-1 9 12-8-11-1Z"/>
    <path fill="#E4B183" stroke="#E4B183" d="m222 224 8 11 4-19-12 8Z"/>
    <path fill="#2F190F" stroke="#2F190F" d="m225 423 12-4-17-1 5 5Z"/>
    <path fill="#151412" stroke="#151412" d="m100 411 15 13-9-21-6 8Z"/>
    <path fill="#DEA266" stroke="#DEA266" d="m156 432 11 7 9-15-20 8Z"/>
    <path fill="#D79D60" stroke="#D79D60" d="m162 452 5-13-10 13h5Z"/>
    <path fill="#160F0B" stroke="#160F0B" d="m293 336-11-5-1 20 12-15Z"/>
    <path fill="#0B0706" stroke="#0B0706" d="m115 424 4 4 10-15-14 11Z"/>
    <path fill="#020100" stroke="#020100" d="m115 443 4-15-4-4v19Z"/>
    <path fill="#D3965A" stroke="#D3965A" d="m167 439 4 2 5-17-9 15Z"/>
    <path fill="#E6AA6F" stroke="#E6AA6F" d="m183 436 4 5 10-19-14 14Z"/>
    <path fill="#D3965A" stroke="#D3965A" d="m179 446-8-5-9 11 17-6Z"/>
    <path fill="#4A3A2E" stroke="#4A3A2E" d="m202 198-16 9 22 13-6-22Z"/>
    <path fill="#AD6B43" stroke="#AD6B43" d="m264 246-11 10 8-1 3-9Z"/>
    <path fill="#DEA266" stroke="#DEA266" d="m179 446 8-5-4-5-4 10Z"/>
    <path fill="#170C03" stroke="#170C03" d="m225 423 7 13 5-17-12 4Z"/>
    <path fill="#855131" stroke="#855131" d="m273 244-9 2 2 14 7-16Z"/>
    <path fill="#C9956B" stroke="#C9956B" d="m273 244-7 16 3 2 4-18Z"/>
    <path fill="#1F120D" stroke="#1F120D" d="m286 286-6 16 24-5-18-11Z"/>
    <path fill="#5A2B1C" stroke="#5A2B1C" d="M286 286h-9l2 7 7-7Z"/>
    <path fill="#CB875A" stroke="#CB875A" d="m277 283 1-16-12 10 11 6Z"/>
    <path fill="#2B1B18" stroke="#2B1B18" d="m304 297-24 5 6 7 18-12Z"/>
    <path fill="#0E0D0A" stroke="#0E0D0A" d="m72 394 23 20 5-3-28-17Z"/>
    <path fill="#080706" stroke="#080706" d="m100 411-5 3 20 10-15-13Z"/>
    <path fill="#865233" stroke="#865233" d="m264 246-9-10-2 20 11-10Z"/>
    <path fill="#13110D" stroke="#13110D" d="m77 378-5 16 34 9-29-25Z"/>
    <path fill="#2A1C17" stroke="#2A1C17" d="m290 326 8 2-12-19 4 17Z"/>
    <path fill="#120D09" stroke="#120D09" d="m292 356 1-20-12 15 11 5Z"/>
    <path fill="#1B0D08" stroke="#1B0D08" d="m268 382 12-2-13-6 1 8Z"/>
    <path fill="#15100C" stroke="#15100C" d="m282 358 10-2-11-5 1 7Z"/>
    <path fill="#1D120C" stroke="#1D120C" d="m269 399 11-19-12 2 1 17Z"/>
    <path fill="#CD8C57" stroke="#CD8C57" d="m211 442 8-6-22-14 14 20Z"/>
    <path fill="#4C3422" stroke="#4C3422" d="m237 419 15-3-11-16-4 19Z"/>
    <path fill="#382F27" stroke="#382F27" d="m53 379 19 15 5-16-24 1Z"/>
    <path fill="#150D06" stroke="#150D06" d="m232 436 20-20-15 3-5 17Z"/>
    <path fill="#E8B485" stroke="#E8B485" d="m242 215-8 1-4 19 12-20Z"/>
    <path fill="#4A3225" stroke="#4A3225" d="m202 198 6 22 11-4-17-18Z"/>
    <path fill="#523623" stroke="#523623" d="m252 416 17-17-28 1 11 16Z"/>
    <path fill="#D0925A" stroke="#D0925A" d="m187 441 24 1-14-20-10 19Z"/>
    <path fill="#D69A5E" stroke="#D69A5E" d="m171 441 8 5 4-10-12 5Z"/>
    <path fill="#D99D61" stroke="#D99D61" d="m162 452 9-11-4-2-5 13Z"/>
    <path fill="#2A1C14" stroke="#2A1C14" d="m119 428 24 15-4-19-20 4Z"/>
    <path fill="#080705" stroke="#080705" d="M115 443h28l-24-15-4 15Z"/>
    <path fill="#120C07" stroke="#120C07" d="m280 380 12-24-10 2-2 22Z"/>
    <path fill="#A1724A" stroke="#A1724A" d="m143 443 2 1 11-12-13 11Z"/>
    <path fill="#4E4335" stroke="#4E4335" d="m186 207 5-8-9 8h4Z"/>
    <path fill="#52493B" stroke="#52493B" d="m182 207-9-19 2 22 7-3Z"/>
    <path fill="#4E372A" stroke="#4E372A" d="m202 198 17 18 4-1-21-17Z"/>
    <path fill="#291207" stroke="#291207" d="M219 436h13l-7-13-6 13Z"/>
    <path fill="#784525" stroke="#784525" d="m209 451 2-9-14 14 12-5Z"/>
    <path fill="#291C17" stroke="#291C17" d="m293 336 5-8-8-2 3 10Z"/>
    <path fill="#2B201A" stroke="#2B201A" d="m304 349-6-21-5 8 11 13Z"/>
    <path fill="#A67451" stroke="#A67451" d="M264 246v-12l-9 2 9 10Z"/>
    <path fill="#EFBA8B" stroke="#EFBA8B" d="M243 215h-1l-12 20 13-20Z"/>
    <path fill="#AA7451" stroke="#AA7451" d="m270 238-6-4v12l6-8Z"/>
    <path fill="#D19D73" stroke="#D19D73" d="m278 267-5-23-4 18 9 5Z"/>
    <path fill="#AD7A53" stroke="#AD7A53" d="m276 241-3 3 5 23-2-26Z"/>
    <path fill="#1F1B14" stroke="#1F1B14" d="m200 190 2 8 8-17-10 9Z"/>
    <path fill="#45352A" stroke="#45352A" d="m234 196-32 2 21 17 11-19Z"/>
    <path fill="#D1A178" stroke="#D1A178" d="m243 215-13 20 25 1-12-21Z"/>
    <path fill="#160A03" stroke="#160A03" d="m230 453 2-17h-13l11 17Z"/>
    <path fill="#77462C" stroke="#77462C" d="m234 196-11 19 11 1v-20Z"/>
    <path fill="#E9B07E" stroke="#E9B07E" d="m261 219-18-4 12 21 6-17Z"/>
    <path fill="#E5AC7F" stroke="#E5AC7F" d="m264 234-3-15-6 17 9-2Z"/>
    <path fill="#835334" stroke="#835334" d="m273 244-3-6-6 8 9-2Z"/>
    <path fill="#241913" stroke="#241913" d="m312 365-8-16-12 7 20 9Z"/>
    <path fill="#18100A" stroke="#18100A" d="m269 399 31-14-20-5-11 19Z"/>
    <path fill="#160F0A" stroke="#160F0A" d="m252 416 19-10-2-7-17 17Z"/>
    <path fill="#130D08" stroke="#130D08" d="m261 419 10-13-19 10 9 3Z"/>
    <path fill="#E0A469" stroke="#E0A469" d="m157 452 10-13-11-7 1 20Z"/>
    <path fill="#B47542" stroke="#B47542" d="m197 456 14-14-24-1 10 15Z"/>
    <path fill="#1E1712" stroke="#1E1712" d="m133 463 12-19-2-1-10 20Z"/>
    <path fill="#1A110C" stroke="#1A110C" d="m141 469 16-17-12-8-4 25Z"/>
    <path fill="#B07E4F" stroke="#B07E4F" d="m145 444 12 8-1-20-11 12Z"/>
    <path fill="#0C0A06" stroke="#0C0A06" d="m264 425-3-6-9-3 12 9Z"/>
    <path fill="#040503" stroke="#040503" d="m114 449 1-6-29-7 28 13Z"/>
    <path fill="#AC7751" stroke="#AC7751" d="m273 244 3-3-6-3 3 6Z"/>
    <path fill="#D59464" stroke="#D59464" d="m273 228-12-9 3 15 9-6Z"/>
    <path fill="#86583C" stroke="#86583C" d="m301 251-25-10 2 26 23-16Z"/>
    <path fill="#170B06" stroke="#170B06" d="m301 281-23-14 8 19 15-5Z"/>
    <path fill="#080806" stroke="#080806" d="m86 436 29 7v-19l-29 12Z"/>
    <path fill="#070705" stroke="#070705" d="m115 424-20-10-9 22 29-12Z"/>
    <path fill="#331C0E" stroke="#331C0E" d="m211 442 19 11-11-17-8 6Z"/>
    <path fill="#020202" stroke="#020202" d="m264 425 4-6h-7l3 6Z"/>
    <path fill="#CA8C54" stroke="#CA8C54" d="m197 456-10-15 6 17 4-2Z"/>
    <path fill="#544F49" stroke="#544F49" d="m29 392 18-3 6-10-24 13Z"/>
    <path fill="#261A16" stroke="#261A16" d="m298 328 6-31-18 12 12 19Z"/>
    <path fill="#595143" stroke="#595143" d="m191 199-18-11 9 19 9-8Z"/>
    <path fill="#403930" stroke="#403930" d="m192 180-19 8 18 11 1-19Z"/>
    <path fill="#211813" stroke="#211813" d="m292 356 12-7-11-13-1 20Z"/>
    <path fill="#1E1510" stroke="#1E1510" d="m317 334-6-41-7 4 13 37Z"/>
    <path fill="#18100A" stroke="#18100A" d="m300 385-8-29-12 24 20 5Z"/>
    <path fill="#100905" stroke="#100905" d="m304 297-2-12-16 1 18 11Z"/>
    <path fill="#41382D" stroke="#41382D" d="m202 198-2-8-9 9 11-1Z"/>
    <path fill="#A2613B" stroke="#A2613B" d="m241 200-7 16 8-1-1-15Z"/>
    <path fill="#0C0704" stroke="#0C0704" d="m302 285-1-4-15 5 16-1Z"/>
    <path fill="#D89B60" stroke="#D89B60" d="m193 458-6-17-8 5 14 12Z"/>
    <path fill="#59341A" stroke="#59341A" d="m193 458-13 18 8-1 5-17Z"/>
    <path fill="#030302" stroke="#030302" d="m264 425-12-9 10 27 2-18Z"/>
    <path fill="#0B0B07" stroke="#0B0B07" d="M261 419h7l3-13-10 13Z"/>
    <path fill="#16110B" stroke="#16110B" d="m271 406 29-21-31 14 2 7Z"/>
    <path fill="#CE9062" stroke="#CE9062" d="m243 215 6-7-7 7h1Z"/>
    <path fill="#D69A70" stroke="#D69A70" d="m273 228-9 6 6 4 3-10Z"/>
    <path fill="#6D3D21" stroke="#6D3D21" d="M197 456h8l4-5-12 5Z"/>
    <path fill="#AA703F" stroke="#AA703F" d="m193 458-14-12 1 30 13-18Z"/>
    <path fill="#DE9D68" stroke="#DE9D68" d="m261 219-1-2-17-2 18 4Z"/>
    <path fill="#D99460" stroke="#D99460" d="m264 215-4 2 1 2 3-4Z"/>
    <path fill="#221209" stroke="#221209" d="m209 451 21 2-19-11-2 9Z"/>
    <path fill="#432511" stroke="#432511" d="m204 472 1-16h-8l7 16Z"/>
    <path fill="#070503" stroke="#070503" d="m262 443-10-27-20 20 30 7Z"/>
    <path fill="#CA8757" stroke="#CA8757" d="m260 217-11-9-6 7 17 2Z"/>
    <path fill="#CE9368" stroke="#CE9368" d="m276 241-3-13-3 10 6 3Z"/>
    <path fill="#D69467" stroke="#D69467" d="m276 223-3 5 3 13v-18Z"/>
    <path fill="#000101" stroke="#000101" d="m264 425 8-6h-4l-4 6Z"/>
    <path fill="#090A06" stroke="#090A06" d="M268 419h4l-1-13-3 13Z"/>
    <path fill="#040503" stroke="#040503" d="m115 443 3 12 25-12h-28Z"/>
    <path fill="#281609" stroke="#281609" d="m157 452-3 17 8-17h-5Z"/>
    <path fill="#171611" stroke="#171611" d="m62 409 33 5-23-20-10 15Z"/>
    <path fill="#030402" stroke="#030402" d="m57 404 5 5 10-15-15 10Z"/>
    <path fill="#080705" stroke="#080705" d="m57 404 15-10-21 5 6 5Z"/>
    <path fill="#7A3B1D" stroke="#7A3B1D" d="m253 205-12-5 8 8 4-3Z"/>
    <path fill="#9B5734" stroke="#9B5734" d="m249 208-8-8 1 15 7-7Z"/>
    <path fill="#B66E42" stroke="#B66E42" d="m254 207-5 1 11 9-6-10Z"/>
    <path fill="#080907" stroke="#080907" d="m114 449 1 2v-8l-1 6Z"/>
    <path fill="#000200" stroke="#000200" d="M115 460v-9l-8 9h8Z"/>
    <path fill="#683A27" stroke="#683A27" d="m241 200-7-4v20l7-16Z"/>
    <path fill="#231F19" stroke="#231F19" d="m51 399 21-5-19-15-2 20Z"/>
    <path fill="#CB8451" stroke="#CB8451" d="m276 223-12-8-3 4 15 4Z"/>
    <path fill="#BB7444" stroke="#BB7444" d="m264 215-10-8 6 10 4-2Z"/>
    <path fill="#4E3226" stroke="#4E3226" d="m241 200 8-13-15 9 7 4Z"/>
    <path fill="#342E25" stroke="#342E25" d="m200 190-3-7-6 16 9-9Z"/>
    <path fill="#302C27" stroke="#302C27" d="m210 181-13 2 3 7 10-9Z"/>
    <path fill="#B8774B" stroke="#B8774B" d="m301 237-25-14v18l25-4Z"/>
    <path fill="#3A2317" stroke="#3A2317" d="m318 282-9-11-8 10 17 1Z"/>
    <path fill="#0C0605" stroke="#0C0605" d="m304 297 7-4-9-8 2 12Z"/>
    <path fill="#281D19" stroke="#281D19" d="m317 334-13-37-6 31 19 6Z"/>
    <path fill="#2D201A" stroke="#2D201A" d="m304 349 13-15-19-6 6 21Z"/>
    <path fill="#14110C" stroke="#14110C" d="m272 419 28-34-29 21 1 13Z"/>
    <path fill="#090907" stroke="#090907" d="m62 415 33-1-33-5v6Z"/>
    <path fill="#171412" stroke="#171412" d="M83 436h3l9-22-12 22Z"/>
    <path fill="#8D4929" stroke="#8D4929" d="m261 202-8 3 1 2 7-5Z"/>
    <path fill="#A35A36" stroke="#A35A36" d="m254 207-1-2-4 3 5-1Z"/>
    <path fill="#120B05" stroke="#120B05" d="m219 475 11-22-21-2 10 24Z"/>
    <path fill="#010101" stroke="#010101" d="m264 425 10 8-2-14-8 6Z"/>
    <path fill="#1B0E07" stroke="#1B0E07" d="m219 475-10-24-4 5 14 19Z"/>
    <path fill="#090B08" stroke="#090B08" d="m115 451 3 4-3-12v8Z"/>
    <path fill="#020402" stroke="#020402" d="m115 460 3-5-3-4v9Z"/>
    <path fill="#080A07" stroke="#080A07" d="M59 415h3v-6l-3 6Z"/>
    <path fill="#322D26" stroke="#322D26" d="m47 389 4 10 2-20-6 10Z"/>
    <path fill="#3F3A32" stroke="#3F3A32" d="m197 183-5-3-1 19 6-16Z"/>
    <path fill="#2C2926" stroke="#2C2926" d="m191 163 1 17 5 3-6-20Z"/>
    <path fill="#060704" stroke="#060704" d="m59 415 3-6-6 3 3 3Z"/>
    <path fill="#CA8352" stroke="#CA8352" d="m273 228 3-5-15-4 12 9Z"/>
    <path fill="#A15A32" stroke="#A15A32" d="m264 215-3-13-7 5 10 8Z"/>
    <path fill="#1A0C06" stroke="#1A0C06" d="m303 256-25 11 23 14 2-25Z"/>
    <path fill="#0A0B09" stroke="#0A0B09" d="m86 436-1 2 29 11-28-13Z"/>
    <path fill="#0E0D0B" stroke="#0E0D0B" d="m62 415 21 21 12-22-33 1Z"/>
    <path fill="#020200" stroke="#020200" d="m83 436 2 2 1-2h-3Z"/>
    <path fill="#291F18" stroke="#291F18" d="m324 341-7-7-13 15 20-8Z"/>
    <path fill="#070705" stroke="#070705" d="m118 455 15 8 10-20-25 12Z"/>
    <path fill="#000200" stroke="#000200" d="m115 460 18 3-15-8-3 5Zm-49-24 16 3 1-3H66Z"/>
    <path fill="#000100" stroke="#000100" d="m83 436-1 3 3-1-2-2Z"/>
    <path fill="#0B0B08" stroke="#0B0B08" d="m56 412 6-3-5-5-1 8Z"/>
    <path fill="#120806" stroke="#120806" d="m318 282-17-1 1 4 16-3Z"/>
    <path fill="#090403" stroke="#090403" d="m318 282-16 3 9 8 7-11Z"/>
    <path fill="#28201A" stroke="#28201A" d="m300 385 12-20-20-9 8 29Z"/>
    <path fill="#332C25" stroke="#332C25" d="m234 196-24-15-8 17 32-2Z"/>
    <path fill="#312923" stroke="#312923" d="m249 187-39-6 24 15 15-9Z"/>
    <path fill="#161511" stroke="#161511" d="m51 399 5 13 1-8-6-5Z"/>
    <path fill="#090906" stroke="#090906" d="m37 411 19 1-5-13-14 12Z"/>
    <path fill="#150B07" stroke="#150B07" d="m309 271-6-15-2 25 8-10Z"/>
    <path fill="#010301" stroke="#010301" d="m107 460 8-9-1-2-7 11Z"/>
    <path fill="#000200" stroke="#000200" d="M66 436h17l-21-21 4 21Z"/>
    <path fill="#000200" stroke="#000200" d="m66 436-4-21h-3l7 21Z"/>
    <path fill="#341A11" stroke="#341A11" d="m303 256-2-5-23 16 25-11Z"/>
    <path fill="#16120D" stroke="#16120D" d="M141 469h13l3-17-16 17Z"/>
    <path fill="#6E4122" stroke="#6E4122" d="m193 458 11 14-7-16-4 2Z"/>
    <path fill="#0E0D0A" stroke="#0E0D0A" d="m133 463 8 6 4-25-12 19Z"/>
    <path fill="#030503" stroke="#030503" d="m107 460 7-11-29-11 22 22Z"/>
    <path fill="#A3A19F" stroke="#A3A19F" d="m192 180-18-7-1 15 19-8Z"/>
    <path fill="#C8C7C6" stroke="#C8C7C6" d="m191 163-17 10 18 7-1-17Z"/>
    <path fill="#613524" stroke="#613524" d="m253 205-4-18-8 13 12 5Z"/>
    <path fill="#C07847" stroke="#C07847" d="m276 223-2-10-10 2 12 8Z"/>
    <path fill="#B06738" stroke="#B06738" d="M284 213h-10l2 10 8-10Z"/>
    <path fill="#9B552C" stroke="#9B552C" d="m274 213-13-11 3 13 10-2Z"/>
    <path fill="#000200" stroke="#000200" d="m107 479 34-10-8-6-26 16Z"/>
    <path fill="#39312B" stroke="#39312B" d="m312 365 12-24-20 8 8 16Z"/>
    <path fill="#010101" stroke="#010101" d="m262 443 12-10-10-8-2 18Z"/>
    <path fill="#030201" stroke="#030201" d="m257 450 5-7-30-7 25 14Z"/>
    <path fill="#2B1F18" stroke="#2B1F18" d="m321 248-20 3 2 5 18-8Z"/>
    <path fill="#A26C4B" stroke="#A26C4B" d="m306 238-5-1v14l5-13Z"/>
    <path fill="#3D3936" stroke="#3D3936" d="m340 292-22-10-7 11 29-1Z"/>
    <path fill="#000200" stroke="#000200" d="m115 460-2 6 20-3-18-3Zm-34 2 26-2-22-22-4 24Z"/>
    <path fill="#090603" stroke="#090603" d="m230 453 27-3-25-14-2 17Z"/>
    <path fill="#492813" stroke="#492813" d="m188 475 16-3-11-14-5 17Z"/>
    <path fill="#110902" stroke="#110902" d="m161 475 1-23-8 17 7 6Z"/>
    <path fill="#0A0B08" stroke="#0A0B08" d="m145 489 16-14-7-6-9 20Z"/>
    <path fill="#020402" stroke="#020402" d="m145 489 9-20h-13l4 20Z"/>
    <path fill="#281F19" stroke="#281F19" d="m317 334 9-1-15-40 6 41Z"/>
    <path fill="#000200" stroke="#000200" d="m107 460 2 2 6-2h-8Z"/>
    <path fill="#000200" stroke="#000200" d="m98 472 11-10-2-2-9 12Z"/>
    <path fill="#010101" stroke="#010101" d="m262 443 18-8-6-2-12 10Z"/>
    <path fill="#020201" stroke="#020201" d="M257 456v-6l-27 3 27 3Z"/>
    <path fill="#B07744" stroke="#B07744" d="m180 476-1-30-17 6 18 24Z"/>
    <path fill="#23140A" stroke="#23140A" d="m161 475 19 1-18-24-1 23Z"/>
    <path fill="#544E48" stroke="#544E48" d="m324 341 2-8-9 1 7 7Z"/>
    <path fill="#B87F57" stroke="#B87F57" d="M301 251v-14l-25 4 25 10Z"/>
    <path fill="#4C2F21" stroke="#4C2F21" d="m306 238-5 13 17-11-12-2Z"/>
    <path fill="#000200" stroke="#000200" d="m109 462 4 4 2-6-6 2Z"/>
    <path fill="#000200" stroke="#000200" d="m98 472 15-6-4-4-11 10Zm-16-33-1 23 4-24-3 1Zm-36-15 20 12-7-21-13 9Z"/>
    <path fill="#5B2615" stroke="#5B2615" d="m258 187-5 18 8-3-3-15Z"/>
    <path fill="#4D2218" stroke="#4D2218" d="M258 187h-9l4 18 5-18Z"/>
    <path fill="#34312E" stroke="#34312E" d="m210 181-19-18 6 20 13-2Z"/>
    <path fill="#904C28" stroke="#904C28" d="m274 197-13 5 13 11v-16Z"/>
    <path fill="#010101" stroke="#010101" d="m285 461-5-26-18 8 23 18Zm-11-28 6 2-8-16 2 14Z"/>
    <path fill="#AF693D" stroke="#AF693D" d="m301 237-17-24-8 10 25 14Z"/>
    <path fill="#010101" stroke="#010101" d="M257 450v6l5-13-5 7Z"/>
    <path fill="#040302" stroke="#040302" d="m226 476 31-20-27-3-4 23Z"/>
    <path fill="#814726" stroke="#814726" d="m301 237 11-16-28-8 17 24Z"/>
    <path fill="#140E0A" stroke="#140E0A" d="m321 248-18 8 6 15 12-23Z"/>
    <path fill="#2A251F" stroke="#2A251F" d="m47 389-18 3 22 7-4-10Z"/>
    <path fill="#000200" stroke="#000200" d="m56 412-10 12 13-9-3-3Z"/>
    <path fill="#130B04" stroke="#130B04" d="m204 472 15 3-14-19-1 16Z"/>
    <path fill="#130B06" stroke="#130B06" d="m212 482 7-7-15-3 8 10Z"/>
    <path fill="#120C06" stroke="#120C06" d="m226 476-7-1-7 7 14-6Z"/>
    <path fill="#555250" stroke="#555250" d="m211 161-20 2 19 18 1-20Z"/>
    <path fill="#68301B" stroke="#68301B" d="m274 197-16-10 3 15 13-5Z"/>
    <path fill="#1C1815" stroke="#1C1815" d="m211 161-1 20 39 6-38-26Z"/>
    <path fill="#7A3B1C" stroke="#7A3B1C" d="m287 202-9-1 6 12 3-11Z"/>
    <path fill="#894521" stroke="#894521" d="m284 213-6-12-4 12h10Z"/>
    <path fill="#211E18" stroke="#211E18" d="m29 392 8 19 14-12-22-7Z"/>
    <path fill="#904D2B" stroke="#904D2B" d="m278 201-4-4v16l4-12Z"/>
    <path fill="#0B0C09" stroke="#0B0C09" d="m37 411 9 13 10-12-19-1Z"/>
    <path fill="#000200" stroke="#000200" d="m66 436-4 11 20-8-16-3Z"/>
    <path fill="#0F0B04" stroke="#0F0B04" d="m219 475 7 1 4-23-11 22Z"/>
    <path fill="#110802" stroke="#110802" d="m203 483 1-11-16 3 15 8Z"/>
    <path fill="#17110A" stroke="#17110A" d="m204 491-1-8-15 18 16-10Z"/>
    <path fill="#140C04" stroke="#140C04" d="M188 501v-26l-8 1 8 25Z"/>
    <path fill="#110B06" stroke="#110B06" d="m170 492 10-16-19-1 9 17Z"/>
    <path fill="#150C05" stroke="#150C05" d="m203 483 9-1-8-10-1 11Z"/>
    <path fill="#642F1B" stroke="#642F1B" d="m290 195-28-11 12 13 16-2Z"/>
    <path fill="#491D13" stroke="#491D13" d="m274 197-12-13-4 3 16 10Z"/>
    <path fill="#401E16" stroke="#401E16" d="m258 187 4-3-13 3h9Z"/>
    <path fill="#1B1815" stroke="#1B1815" d="m244 150-33 11 38 26-5-37Z"/>
    <path fill="#000200" stroke="#000200" d="m46 424 16 23 4-11-20-12Z"/>
    <path fill="#6F361C" stroke="#6F361C" d="m295 197-8 5-3 11 11-16Z"/>
    <path fill="#77381B" stroke="#77381B" d="m278 201 12-6-16 2 4 4Z"/>
    <path fill="#706C6A" stroke="#706C6A" d="m326 333 14-41-29 1 15 40Z"/>
    <path fill="#0F0C09" stroke="#0F0C09" d="m331 256-10-8-12 23 22-15Z"/>
    <path fill="#1A1513" stroke="#1A1513" d="m326 247-5 1 10 8-5-9Z"/>
    <path fill="#603620" stroke="#603620" d="m306 238 6-17-11 16 5 1Z"/>
    <path fill="#000200" stroke="#000200" d="m62 447 19 15 1-23-20 8Zm45 32 38 10-4-20-34 10Zm-21-9 12 2 9-12-21 10Z"/>
    <path fill="#2C1E17" stroke="#2C1E17" d="m321 248-3-8-17 11 20-3Z"/>
    <path fill="#7E4022" stroke="#7E4022" d="M287 202v-2l-9 1 9 1Z"/>
    <path fill="#63331C" stroke="#63331C" d="m290 195-3 5 8-3-5-2Z"/>
    <path fill="#000200" stroke="#000200" d="m107 479 26-16-20 3-6 13Z"/>
    <path fill="#030403" stroke="#030403" d="m46 424-20 11 36 12-16-23Z"/>
    <path fill="#0E0D0C" stroke="#0E0D0C" d="m37 411-15 9 24 4-9-13Z"/>
    <path fill="#1E1D16" stroke="#1E1D16" d="m29 392-1 19h9l-8-19Z"/>
    <path fill="#000200" stroke="#000200" d="m98 472 9 7 6-13-15 6Z"/>
    <path fill="#000200" stroke="#000200" d="m85 490 22-11-9-7-13 18Z"/>
    <path fill="#070705" stroke="#070705" d="m145 489 25 3-9-17-16 14Z"/>
    <path fill="#171008" stroke="#171008" d="m203 483 1 8 8-9-9 1Z"/>
    <path fill="#1C1410" stroke="#1C1410" d="m321 248 5-1-8-7 3 8Z"/>
    <path fill="#000200" stroke="#000200" d="m81 462 5 8 21-10-26 2Z"/>
    <path fill="#000200" stroke="#000200" d="m67 469 19 1-5-8-14 7Z"/>
    <path fill="#291810" stroke="#291810" d="m331 256-22 15 9 11 13-26Z"/>
    <path fill="#2E180F" stroke="#2E180F" d="m318 240-6-19-6 17 12 2Z"/>
    <path fill="#150E06" stroke="#150E06" d="m188 501 15-18-15-8v26Z"/>
    <path fill="#0D0905" stroke="#0D0905" d="m212 482 23 9-9-15-14 6Z"/>
    <path fill="#010101" stroke="#010101" d="m264 479 21-18-28-5 7 23Z"/>
    <path fill="#403E3C" stroke="#403E3C" d="m349 266-18-10-13 26 31-16Z"/>
    <path fill="#030402" stroke="#030402" d="m2 409 20 11 6-9-26-2Z"/>
    <path fill="#130E0A" stroke="#130E0A" d="m325 220-7 20 21 2-14-22Z"/>
    <path fill="#1C100A" stroke="#1C100A" d="m325 220-13 1 6 19 7-20Z"/>
    <path fill="#70351A" stroke="#70351A" d="m287 200 3-5-12 6 9-1Z"/>
    <path fill="#1A120F" stroke="#1A120F" d="m262 184-18-34 5 37 13-3Z"/>
    <path fill="#6D361D" stroke="#6D361D" d="m295 197-8 3v2l8-5Z"/>
    <path fill="#16110B" stroke="#16110B" d="m170 492 7 8 3-24-10 16Z"/>
    <path fill="#010101" stroke="#010101" d="m154 500 14-3 2-5-16 8Z"/>
    <path fill="#010101" stroke="#010101" d="m154 500 16-8-25-3 9 11Z"/>
    <path fill="#23201E" stroke="#23201E" d="m250 144-6 6 18 34-12-40Z"/>
    <path fill="#67331A" stroke="#67331A" d="m312 221-17-24-11 16 28 8Z"/>
    <path fill="#040403" stroke="#040403" d="m181 511-4-11-9-3 13 14Z"/>
    <path fill="#0E0D0A" stroke="#0E0D0A" d="m168 497 9 3-7-8-2 5Z"/>
    <path fill="#000200" stroke="#000200" d="m129 504 20-5-4-10-16 15Z"/>
    <path fill="#000200" stroke="#000200" d="m129 504 16-15-17 15h1Z"/>
    <path fill="#010101" stroke="#010101" d="m149 499 5 1-9-11 4 10Z"/>
    <path fill="#060606" stroke="#060606" d="m280 435 33 3-41-19 8 16Z"/>
    <path fill="#010101" stroke="#010101" d="m257 456 28 5-23-18-5 13Zm7 23-7-23-5 34 12-11Z"/>
    <path fill="#030302" stroke="#030302" d="m28 411-6 9 15-9h-9Z"/>
    <path fill="#000200" stroke="#000200" d="m62 447 5 22 14-7-19-15Z"/>
    <path fill="#0C0D0A" stroke="#0C0D0A" d="m0 403 28 8 1-19-29 11Z"/>
    <path fill="#120D07" stroke="#120D07" d="M204 491h31l-23-9-8 9Z"/>
    <path fill="#130E07" stroke="#130E07" d="m177 500 11 1-8-25-3 24Z"/>
    <path fill="#151410" stroke="#151410" d="m181 511 7-10-11-1 4 11Z"/>
    <path fill="#090703" stroke="#090703" d="m234 511 1-20h-31l30 20Z"/>
    <path fill="#000200" stroke="#000200" d="m86 470-3 18 15-16-12-2Zm-24 9 5-10-26 5 21 5Z"/>
    <path fill="#140F09" stroke="#140F09" d="M188 501h11l5-10-16 10Z"/>
    <path fill="#010101" stroke="#010101" d="m154 500 2 3 12-6-14 3Z"/>
    <path fill="#0B0903" stroke="#0B0903" d="m188 501 16 14-5-14h-11Z"/>
    <path fill="#010101" stroke="#010101" d="m149 499 7 4-2-3-5-1Z"/>
    <path fill="#000200" stroke="#000200" d="m136 523 20-20-7-4-13 24Z"/>
    <path fill="#010101" stroke="#010101" d="m252 490 5-34-31 20 26 14Zm73-1-28-34-12 6 40 28Z"/>
    <path fill="#010101" stroke="#010101" d="m285 461 12-6-17-20 5 26Z"/>
    <path fill="#010101" stroke="#010101" d="m297 455 16-17-33-3 17 20Z"/>
    <path fill="#2B150C" stroke="#2B150C" d="m312 221 13-1-30-23 17 24Z"/>
    <path fill="#16120F" stroke="#16120F" d="m339 242-21-2 8 7 13-5Z"/>
    <path fill="#100F0E" stroke="#100F0E" d="m339 242-13 5 5 9 8-14Z"/>
    <path fill="#3A3A39" stroke="#3A3A39" d="m339 242-8 14 18 10-10-24Z"/>
    <path fill="#020201" stroke="#020201" d="m22 420 4 15 20-11-24-4Z"/>
    <path fill="#BCBBB9" stroke="#BCBBB9" d="m349 266-31 16 22 10 9-26Z"/>
    <path fill="#010101" stroke="#010101" d="m235 491 17-1-26-14 9 15Zm29-12 2 5 19-23-21 18Z"/>
    <path fill="#010101" stroke="#010101" d="m242 498 10-8-17 1 7 7Z"/>
    <path fill="#000200" stroke="#000200" d="m128 504 17-15-38-10 21 25Z"/>
    <path fill="#070605" stroke="#070605" d="m250 144 12 40 40-31-52-9Z"/>
    <path fill="#000200" stroke="#000200" d="m109 505 19-1-21-25 2 26Z"/>
    <path fill="#010101" stroke="#010101" d="m252 490 14-6-2-5-12 11Z"/>
    <path fill="#000200" stroke="#000200" d="m69 485 14 3 3-18-17 15Z"/>
    <path fill="#000200" stroke="#000200" d="m69 485 17-15-19-1 2 16Z"/>
    <path fill="#010101" stroke="#010101" d="m234 511 8-13-7-7-1 20Zm-59 10 6-10-13-14 7 24Z"/>
    <path fill="#010101" stroke="#010101" d="m175 521-7-24-12 6 19 18Z"/>
    <path fill="#000200" stroke="#000200" d="m129 513 20-14-20 5v9Zm-1-9v2l1-2h-1Zm-19 1 19 1v-2l-19 1Zm-26-17 2 2 13-18-15 16Z"/>
    <path fill="#000200" stroke="#000200" d="m69 485 16 5-2-2-14-3Z"/>
    <path fill="#010101" stroke="#010101" d="m252 490 2 14 12-20-14 6Z"/>
    <path fill="#0F0C06" stroke="#0F0C06" d="M204 515v-24l-5 10 5 14Z"/>
    <path fill="#0A0A09" stroke="#0A0A09" d="m22 420-11 4 15 11-4-15Z"/>
    <path fill="#000200" stroke="#000200" d="m41 474 26-5-5-22-21 27Z"/>
    <path fill="#151514" stroke="#151514" d="m2 409 9 15 11-4-20-11Z"/>
    <path fill="#040604" stroke="#040604" d="m0 403 2 6 26 2-28-8Z"/>
    <path fill="#000200" stroke="#000200" d="m41 474 21-27-36-12 15 39Zm53 39-2-16-9 19 11-3Zm-9-23 7 7 15-18-22 11Zm-23-11 7 6-2-16-5 10Zm30 18 17 8-2-26-15 18Z"/>
    <path fill="#12120E" stroke="#12120E" d="m194 523-6-22-7 10 13 12Z"/>
    <path fill="#190C08" stroke="#190C08" d="m262 184 28 11 12-42-40 31Z"/>
    <path fill="#11110B" stroke="#11110B" d="m194 523 10-8-16-14 6 22Z"/>
    <path fill="#000200" stroke="#000200" d="M129 513v-9l-1 2 1 7Z"/>
    <path fill="#000200" stroke="#000200" d="m116 515 13-2-1-7-12 9Z"/>
    <path fill="#271E18" stroke="#271E18" d="m307 154-17 41 5 2 12-43Z"/>
    <path fill="#040302" stroke="#040302" d="m339 242 6-16-20-6 14 22Z"/>
    <path fill="#434343" stroke="#434343" d="m349 266-4-40-6 16 10 24Z"/>
    <path fill="#010101" stroke="#010101" d="m242 498 12 6-2-14-10 8Z"/>
    <path fill="#090703" stroke="#090703" d="m204 515 30-4-30-20v24Z"/>
    <path fill="#010101" stroke="#010101" d="m204 515 29 7 1-11-30 4Zm-46 9 17-3-19-18 2 21Zm76-13 20-7-12-6-8 13Zm91-22 1-39-29 5 28 34Z"/>
    <path fill="#010101" stroke="#010101" d="m297 455 29-5-13-12-16 17Zm12 49-24-43-19 23 43 20Z"/>
    <path fill="#000200" stroke="#000200" d="m62 479-14 27 21-21-7-6Zm32 34 15-8-17-8 2 16Zm12 6 10-4-7-10-3 14Zm-84-54 19 9-15-39-4 30Zm114 58 22 1-2-21-20 20Z"/>
    <path fill="#000200" stroke="#000200" d="m109 505 7 10 12-9-19-1Zm-17-8-7-7-2 26 9-19Z"/>
    <path fill="#010101" stroke="#010101" d="m175 521 19 2-13-12-6 10Zm15 10 4-8-19-2 15 10Z"/>
    <path fill="#000200" stroke="#000200" d="m136 523 13-24-20 14 7 10Zm-1 3 1-3-7-10 6 13Z"/>
    <path fill="#000200" stroke="#000200" d="m114 525 21 1-6-13-15 12Zm-31-9 2-26-16-5 14 31Zm53 7 7 5 15-4-22-1Z"/>
    <path fill="#000100" stroke="#000100" d="m176 545 14-14-15-10 1 24Z"/>
    <path fill="#000200" stroke="#000200" d="m114 525 15-12-13 2-2 10Z"/>
    <path fill="#000101" stroke="#000101" d="m2 442 20 23 4-30-24 7Z"/>
    <path fill="#000200" stroke="#000200" d="m48 506 35 10-14-31-21 21Z"/>
    <path fill="#010101" stroke="#010101" d="m2 442 24-7-15-11-9 18Z"/>
    <path fill="#000200" stroke="#000200" d="m94 513 12 6 3-14-15 8Zm47 16 2-1-7-5 5 6Z"/>
    <path fill="#000200" stroke="#000200" d="m141 529-5-6-1 3 6 3Z"/>
    <path fill="#020202" stroke="#020202" d="M2 409v33l9-18-9-15Z"/>
    <path fill="#090A08" stroke="#090A08" d="m0 403 2 39v-33l-2-6Z"/>
    <path fill="#010101" stroke="#010101" d="m254 504 19 2-7-22-12 20Zm-20 7 28 6-8-13-20 7Zm-20 20 19-9-29-7 10 16Z"/>
    <path fill="#020302" stroke="#020302" d="m214 531-10-16 2 21 8-5Z"/>
    <path fill="#000200" stroke="#000200" d="m143 528-6 9 21-13-15 4Zm-6 9 4-8-6-3 2 11Zm39 8-1-24-17 3 18 21Z"/>
    <path fill="#010101" stroke="#010101" d="m262 517 11-11-19-2 8 13Z"/>
    <path fill="#000200" stroke="#000200" d="m106 519 8 6 2-10-10 4Z"/>
    <path fill="#000200" stroke="#000200" d="m98 533 16-8-8-6-8 14Z"/>
    <path fill="#010101" stroke="#010101" d="m233 522 29-5-28-6-1 11Z"/>
    <path fill="#0E0E0C" stroke="#0E0E0C" d="m206 536-2-21-10 8 12 13Z"/>
    <path fill="#000200" stroke="#000200" d="m94 513-2 14 14-8-12-6Z"/>
    <path fill="#010101" stroke="#010101" d="m48 506 14-27-21-5 7 32Z"/>
    <path fill="#161512" stroke="#161512" d="m302 153-12 42 17-41-5-1Z"/>
    <path fill="#252520" stroke="#252520" d="m307 154-12 43 34-28-22-15Z"/>
    <path fill="#010101" stroke="#010101" d="m237 531 25-14-29 5 4 9Z"/>
    <path fill="#4F4E4C" stroke="#4F4E4C" d="m302 153-5-22-47 13 52 9Z"/>
    <path fill="#14100C" stroke="#14100C" d="m329 169-34 28 30 23 4-51Z"/>
    <path fill="#010100" stroke="#010100" d="m190 531 16 5-12-13-4 8Z"/>
    <path fill="#010101" stroke="#010101" d="M214 531h23l-4-9-19 9Z"/>
    <path fill="#000200" stroke="#000200" d="m200 544 6-8-16-5 10 13Zm-59-15-4 8 6-9-2 1Zm-27-4 23 12-2-11-21-1Z"/>
    <path fill="#000200" stroke="#000200" d="m108 539 29-2-23-12-6 14Zm114 22 15-30h-23l8 30Z"/>
    <path fill="#181819" stroke="#181819" d="m347 179-18-10-4 51 22-41Z"/>
    <path fill="#000200" stroke="#000200" d="m83 516 9 11 2-14-11 3Z"/>
    <path fill="#000200" stroke="#000200" d="m81 531 11-4-9-11-2 15Zm11-4 4 3 10-11-14 8Z"/>
    <path fill="#010101" stroke="#010101" d="M0 506h48l-7-32-41 32Z"/>
    <path fill="#000200" stroke="#000200" d="m81 531 17 2-2-3-15 1Z"/>
    <path fill="#010101" stroke="#010101" d="m43 535 5-29H0l43 29Z"/>
    <path fill="#000200" stroke="#000200" d="m206 536 16 25-8-30-8 5Zm-69 1 39 8-18-21-21 13Zm62 18-23-10-1 44 24-34ZM96 530l2 3 8-14-10 11Zm-15 1 15-1-4-3-11 4Zm95 14 24-1-10-13-14 14Z"/>
    <path fill="#010101" stroke="#010101" d="m270 531 1-8-9-6 8 14Z"/>
    <path fill="#010101" stroke="#010101" d="m262 517 9 6 2-17-11 11Zm11-11 36-2-43-20 7 22Zm-3 25-8-14-25 14h33Zm1-8 17-8-15-9-2 17Z"/>
    <path fill="#000200" stroke="#000200" d="m98 533 10 6 6-14-16 8Z"/>
    <path fill="#000200" stroke="#000200" d="m98 567 10-28-10-6v34Z"/>
    <path fill="#010101" stroke="#010101" d="m309 504 16-15-40-28 24 43Z"/>
    <path fill="#060606" stroke="#060606" d="m345 226 2-47-22 41 20 6Z"/>
    <path fill="#010101" stroke="#010101" d="m288 515 21-11-36 2 15 9Z"/>
    <path fill="#000200" stroke="#000200" d="m48 506 33 25 2-15-35-10Z"/>
    <path fill="#CFCFCE" stroke="#CFCFCE" d="m307 154-10-23 5 22 5 1Z"/>
    <path fill="#656A69" stroke="#656A69" d="m326 153-19 1 22 15-3-16Z"/>
    <path fill="#010101" stroke="#010101" d="m271 523 16 4 1-12-17 8Zm17-8 17 26 4-37-21 11Zm-15 29-3-13h-33l36 13Z"/>
    <path fill="#000200" stroke="#000200" d="m200 544 22 17-16-25-6 8Zm-24 1 23 10 1-11-24 1Z"/>
    <path fill="#010101" stroke="#010101" d="m202 560-3-5-24 34 27-29Zm80-29 5-4-16-4 11 8Z"/>
    <path fill="#131512" stroke="#131512" d="m309 504 18-5-2-10-16 15Z"/>
    <path fill="#010101" stroke="#010101" d="m282 531-11-8-1 8h12Z"/>
    <path fill="#11120F" stroke="#11120F" d="m321 545 6-46-18 5 12 41Z"/>
    <path fill="#010101" stroke="#010101" d="m325 489 24 11-23-50-1 39Zm-38 38 18 14-17-26-1 12Zm-14 17 9-13h-12l3 13Z"/>
    <path fill="#000200" stroke="#000200" d="m199 555 3 5-2-16-1 11Zm-24 34 1-44-39-8 38 52Z"/>
    <path fill="#010101" stroke="#010101" d="m262 562 11-18-36-13 25 31Zm20-31 1 15 4-19-5 4Z"/>
    <path fill="#000200" stroke="#000200" d="m202 560 20 1-22-17 2 16Z"/>
    <path fill="#010101" stroke="#010101" d="m48 506-5 29 38-4-33-25Z"/>
    <path fill="#000200" stroke="#000200" d="m81 531 17 36v-34l-17-2Zm27 8-10 28 39-30-29 2Z"/>
    <path fill="#030303" stroke="#030303" d="m0 506 41-32-19-9-22 41Z"/>
    <path fill="#010101" stroke="#010101" d="m286 557-3-11-10-2 13 13Z"/>
    <path fill="#010101" stroke="#010101" d="m273 544 10 2-1-15-9 13Z"/>
    <path fill="#000200" stroke="#000200" d="m222 561 21 1-6-31-15 30Z"/>
    <path fill="#030302" stroke="#030302" d="m321 545 28-45-22-1-6 46Z"/>
    <path fill="#020303" stroke="#020303" d="m327 499 22 1-24-11 2 10Z"/>
    <path fill="#0D0E0C" stroke="#0D0E0C" d="M0 403v103l2-64-2-39Z"/>
    <path fill="#090A08" stroke="#090A08" d="m2 442-2 64 22-41-20-23Z"/>
    <path fill="#000200" stroke="#000200" d="m85 578 13-11-17-36 4 47Z"/>
    <path fill="#010101" stroke="#010101" d="m233 585 4-8-15-16 11 24Z"/>
    <path fill="#010101" stroke="#010101" d="m222 561 15 16 6-15-21-1Zm64-4 19-16-22 5 3 11Z"/>
    <path fill="#010101" stroke="#010101" d="m283 546 22-5-18-14-4 19Zm-40 16h19l-25-31 6 31Zm-3 18 22-18h-19l-3 18Zm22-18 24-5-13-13-11 18Zm0 0 8 16 16-21-24 5Zm-22 18-3-3-4 8 7-5Z"/>
    <path fill="#010101" stroke="#010101" d="m237 577 3 3 3-18-6 15Zm-4 8-11-24 9 27 2-3Z"/>
    <path fill="#000200" stroke="#000200" d="m98 567 77 22-38-52-39 30Z"/>
    <path fill="#010101" stroke="#010101" d="m305 541 16 4-12-41-4 37Z"/>
    <path fill="#010101" stroke="#010101" d="m322 559-1-14-16-4 17 18Zm-19 9 2-27-19 16 17 11Zm-63 12 30-2-8-16-22 18Zm-9 8-9-27-19 37 28-10Z"/>
    <path fill="#050605" stroke="#050605" d="M91 620h86l-2-31-84 31Z"/>
    <path fill="#010101" stroke="#010101" d="m41 562 44 16-4-47-40 31Z"/>
    <path fill="#010101" stroke="#010101" d="m41 562 40-31-38 4-2 27Zm192 23-2 3 9-8-7 5Zm-30 13 19-37-20-1 1 38Z"/>
    <path fill="#010101" stroke="#010101" d="m15 546 26 16 2-27-28 11Z"/>
    <path fill="#010101" stroke="#010101" d="m0 506 15 40 28-11-43-29Z"/>
    <path fill="#080808" stroke="#080808" d="m255 620 15-42-30 2 15 40Z"/>
    <path fill="#010101" stroke="#010101" d="m175 589 28 9-1-38-27 29Zm116 27 4-32-25-6 21 38Z"/>
    <path fill="#010101" stroke="#010101" d="m202 611 1-13-28-9 27 22Zm93-27 8-16-17-11 9 27Zm8-16 19-9-17-18-2 27Z"/>
    <path fill="#0E100D" stroke="#0E100D" d="m321 545 28 43v-88l-28 45Z"/>
    <path fill="#010101" stroke="#010101" d="m40 580 3-3-2-15-1 18Z"/>
    <path fill="#010101" stroke="#010101" d="m41 562 2 15 42 1-44-16Z"/>
    <path fill="#242424" stroke="#242424" d="m177 620 25-9-27-22 2 31Z"/>
    <path fill="#010101" stroke="#010101" d="m270 578 25 6-9-27-16 21Zm33-10 10 33 9-42-19 9Z"/>
    <path fill="#0A0A0A" stroke="#0A0A0A" d="m255 620-15-40-9 8 24 32Z"/>
    <path fill="#010101" stroke="#010101" d="m0 576 40 4 1-18-41 14Zm43 1-3 3 45-2-42-1Zm160 21-1 13 29-23-28 10Z"/>
    <path fill="#000200" stroke="#000200" d="m175 589-77-22-7 53 84-31Z"/>
    <path fill="#2A2A2A" stroke="#2A2A2A" d="m202 611 53 9-24-32-29 23Z"/>
    <path fill="#010101" stroke="#010101" d="m91 620 7-53-13 11 6 42Z"/>
    <path fill="#010101" stroke="#010101" d="m40 580 51 40-6-42-45 2Zm-25-34L0 576l41-14-26-16Z"/>
    <path fill="#010101" stroke="#010101" d="M0 506v70l15-30-15-40Z"/>
    <path fill="#060606" stroke="#060606" d="M22 620h69l-51-40-18 40Z"/>
    <path fill="#E9E9E9" stroke="#E9E9E9" d="M177 620h78l-53-9-25 9Z"/>
    <path fill="#010101" stroke="#010101" d="m291 616 22-15-18-17-4 32Z"/>
    <path fill="#010101" stroke="#010101" d="m295 584 18 17-10-33-8 16Z"/>
    <path fill="#040403" stroke="#040403" d="m322 559 27 29-28-43 1 14Z"/>
    <path fill="#2C2C2C" stroke="#2C2C2C" d="m255 620 36-4-21-38-15 42Z"/>
    <path fill="#010101" stroke="#010101" d="m313 601 36-13-27-29-9 42Zm18 19 18-32-36 13 18 19ZM0 576l22 44 18-40-40-4Z"/>
    <path fill="#E2E2E2" stroke="#E2E2E2" d="M255 620h76l-40-4-36 4Z"/>
    <path fill="#060505" stroke="#060505" d="m291 616 40 4-18-19-22 15Z"/>
    <path fill="#131313" stroke="#131313" d="M0 576v44h22L0 576Z"/>
    <path fill="#191919" stroke="#191919" d="M331 620h18v-32l-18 32Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h349v620H0z"/>
    </clipPath>
  </defs>
</svg>
</svg>

        </div>
    )
}

export default Trianglyfy