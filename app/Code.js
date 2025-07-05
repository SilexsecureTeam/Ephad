{gallerySections
            .filter(
              (section) =>
                activeFilter === "All" || section.title === activeFilter
            )
            .map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="mb-10 md:mb-15"
                role="region"
                aria-label={section.title}
              >
                {/* Slider Container */}
                <div className="relative border-2 border-r-5 border-b-5 border-black rounded-xl w-full h-auto pt-[-20px] pb-8 md:pb-10">
                  <div className="relative overflow-hidden h-[200px] sm:h-[250px] md:h-[250px]">
                    {/* Slider Images */}
                    <div className="relative w-full h-full flex flex-row">
                      {section.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="absolute"
                          style={{
                            left: `calc(${imgIndex * (100 / getVisibleImages())}% - ${imgIndex * 10}px)`,
                            // top: '-20px', // Position images -20px from top
                            width: `calc(${100 / getVisibleImages()}% - 10px)`, // Adjust width for spacing
                            marginRight: '10px', // 10px spacing between images
                            transform: `translateX(${slideIndexes[sectionIndex] * -100}%)`, // Slide based on index
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        >
                          <Image
                            src={image}
                            alt={`${section.title} image ${imgIndex + 1}`}
                            className="w-full h-[200px] sm:h-[250px] md:h-[250px] border border-gray-600 rounded-xl object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => handleSlide(sectionIndex, -1)}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                      disabled={slideIndexes[sectionIndex] === 0}
                      aria-label={`Previous images for ${section.title}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSlide(sectionIndex, 1)}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg0
System: -gray-300 rounded-full p-2 z-10"
                      disabled={
                        slideIndexes[sectionIndex] >=
                        section.images.length - getVisibleImages()
                      }
                      aria-label={`Next images for ${section.title}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-start px-4 md:px-6">
                    <h2 className="font-semibold roboto text-xl sm:text-[22px] py-2 md:py-4">
                      {section.title}
                    </h2>
                    <p className="text-base roboto font-normal">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}